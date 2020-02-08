/** @jsx jsx */
import { useMutation, useQuery } from "@apollo/react-hooks";
import { RouteComponentProps } from "@reach/router";
import { Box, Button, Flex, Heading } from "@theme-ui/components";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { jsx } from "theme-ui";

import { useConference } from "../../context/conference";
import {
  AddScheduleSlotMutation,
  AddScheduleSlotMutationVariables,
  ScheduleQuery,
  ScheduleQueryVariables,
  UpdateOrCreateSlotItemMutation,
  UpdateOrCreateSlotItemMutationVariables,
} from "../../generated/graphql-backend";
import ADD_SCHEDULE_SLOT_QUERY from "./add-schedule-slot.graphql";
import { DaySelector } from "./day-selector";
import { AllTracksEvent, Submission } from "./events";
import { Schedule } from "./schedule";
import SCHEDULE_QUERY from "./schedule.graphql";
import UPDATE_OR_CREATE_ITEM from "./update-or-create-item.graphql";

export const ScheduleScreen: React.SFC<RouteComponentProps> = () => {
  const { code } = useConference();

  // TODO: redirect to today or first day when we add per day routes
  const [currentDay, setCurrentDay] = useState<string | null>(null);

  const { loading, data, error } = useQuery<
    ScheduleQuery,
    ScheduleQueryVariables
  >(SCHEDULE_QUERY, {
    variables: {
      code,
    },
  });

  const [addSlot] = useMutation<
    AddScheduleSlotMutation,
    AddScheduleSlotMutationVariables
  >(ADD_SCHEDULE_SLOT_QUERY, {
    variables: { code, day: currentDay, duration: 60 },
  });

  const [addOrCreateScheduleItem] = useMutation<
    UpdateOrCreateSlotItemMutation,
    UpdateOrCreateSlotItemMutationVariables
  >(UPDATE_OR_CREATE_ITEM);

  const addCustomScheduleItem = useCallback(
    (slotId: string, itemRooms: string[]) =>
      addOrCreateScheduleItem({
        variables: {
          input: {
            slotId,
            rooms: itemRooms,
            title: "Custom",
          },
        },
      }),
    [],
  );

  const addSubmissionToSchedule = useCallback(
    (slotId: string, itemRooms: string[], submissionId: string) =>
      addOrCreateScheduleItem({
        variables: {
          input: {
            slotId,
            submissionId,
            rooms: itemRooms,
          },
        },
      }),
    [],
  );

  const moveItem = useCallback(
    (slotId: string, itemRooms: string[], itemId: string) =>
      addOrCreateScheduleItem({
        variables: {
          input: {
            slotId,
            itemId,
            rooms: itemRooms,
          },
        },
      }),
    [],
  );

  const addScheduleSlot = useCallback(
    (duration: number) =>
      addSlot({
        variables: {
          code,
          day: currentDay,
          duration,
        },
      }),
    [code, currentDay],
  );

  useLayoutEffect(() => {
    if (!currentDay && data?.conference) {
      setCurrentDay(data.conference.days[0].day);
    }
  }, [data]);

  if (loading) {
    return <Box>Loading</Box>;
  }

  if (error) {
    throw error;
  }

  const { rooms, days, submissions } = data?.conference!;

  const day = days.find(d => d.day === currentDay);

  return (
    <DndProvider backend={Backend}>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          borderTop: "primary",
          background: "white",
        }}
      >
        <Heading sx={{ pt: 4, px: 4 }}>List of talks</Heading>
        <Box sx={{ overflowY: "scroll", whiteSpace: "nowrap", p: 4 }}>
          {submissions?.map(({ id, title, duration }) => (
            <Submission
              key={id}
              id={id}
              title={title}
              duration={duration!.duration}
            />
          ))}

          <AllTracksEvent />
        </Box>
      </Box>

      <Box sx={{ flex: 1 }}>
        <Box sx={{ backgroundColor: "orange", borderTop: "primary" }}>
          <Flex sx={{ py: 4, px: 3, maxWidth: "largeContainer", mx: "auto" }}>
            <Heading sx={{ fontSize: 6 }}>Schedule</Heading>

            <DaySelector
              days={days}
              currentDay={currentDay}
              setCurrentDay={setCurrentDay}
            />
          </Flex>
        </Box>

        {day && (
          <Schedule
            slots={day.slots}
            rooms={rooms}
            addCustomScheduleItem={addCustomScheduleItem}
            addSubmissionToSchedule={addSubmissionToSchedule}
            moveItem={moveItem}
          />
        )}

        <Box sx={{ my: 4, ml: 100 }}>
          {data?.conference.durations.map(duration => {
            if (
              duration.allowedSubmissionTypes.find(
                type => type.name.toLowerCase() !== "talk",
              )
            ) {
              return null;
            }

            return (
              <Button
                sx={{ mr: 3 }}
                key={duration.duration}
                onClick={() => addScheduleSlot(duration.duration)}
              >
                Add {duration.duration} minutes slot
              </Button>
            );
          })}
        </Box>
      </Box>
    </DndProvider>
  );
};
