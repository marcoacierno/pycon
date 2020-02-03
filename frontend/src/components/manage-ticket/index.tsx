/** @jsx jsx */
import { useQuery } from "@apollo/react-hooks";
import { RouteComponentProps } from "@reach/router";
import { Box, Button, Heading, Input, Select } from "@theme-ui/components";
import { FormattedMessage } from "react-intl";
import { useFormState } from "react-use-form-state";
import { jsx } from "theme-ui";

import { useConference } from "../../context/conference";
import { useCurrentLanguage } from "../../context/language";
import {
  UserTicketInfoQuery,
  UserTicketInfoQueryVariables,
} from "../../generated/graphql-backend";
import { Alert } from "../alert";
import { InputWrapper } from "../input-wrapper";
import { Link } from "../link";
import USER_TICKET_INFO from "./user-ticket-info.graphql";

type Props = {
  className?: string;
  id: string;
} & RouteComponentProps;

type Form = {
  attendeeName: string;
  answers: {
    [id: string]: {
      questionId: string;
      answer: string;
    };
  };
};

export const ManageTicket: React.SFC<Props> = ({ id }) => {
  const { code: conferenceCode } = useConference();
  const lang = useCurrentLanguage();
  const [formState, { text }] = useFormState<Form>({
    answers: {},
  });

  const { loading, error, data } = useQuery<
    UserTicketInfoQuery,
    UserTicketInfoQueryVariables
  >(USER_TICKET_INFO, {
    variables: {
      conference: conferenceCode,
      language: lang,
      id,
    },
    onCompleted(loadedData) {
      const loadedTicket = loadedData?.me.ticket;

      formState.setField("attendeeName", loadedTicket?.attendeeName ?? "");

      formState.setField(
        "answers",
        loadedTicket?.answers.reduce((allAnswers: Form["answers"], answer) => {
          allAnswers[answer.questionId] = {
            questionId: answer.questionId,
            answer: answer.answer ?? "",
          };
          return allAnswers;
        }, {}) ?? {},
      );
    },
  });

  const ticketData = data?.conference.tickets.find(
    ticket => ticket.id === data.me.ticket?.itemId,
  )!;

  const onChangeAnswer = (
    e: React.ChangeEvent<HTMLInputElement>,
    question: UserTicketInfoQuery["conference"]["tickets"][0]["questions"][0],
  ) => {
    formState.setField("answers", {
      ...formState.values.answers,
      [question.id]: {
        questionId: question.id,
        answer: e.target.value,
      },
    });
  };

  return (
    <Box
      sx={{
        borderTop: "primary",
      }}
    >
      <Box
        sx={{
          maxWidth: "container",
          mx: "auto",
          my: 4,
          px: 3,
        }}
      >
        <Heading as="h1" mb={4}>
          <FormattedMessage
            id="manageTicket.heading"
            values={{
              ticketName: data?.me.ticket?.ticketName,
            }}
          />
        </Heading>

        {loading && (
          <Alert variant="info">
            <FormattedMessage id="global.loading" />
          </Alert>
        )}

        {error && <Alert variant="alert">{error.message}</Alert>}

        {data && (
          <Box as="form">
            <InputWrapper label="Attendee name">
              <Input {...text("attendeeName")} required={true} />
            </InputWrapper>

            {ticketData.questions.map(question => (
              <InputWrapper key={question.id} label={question.name}>
                {question.options.length === 0 && (
                  <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChangeAnswer(e, question)
                    }
                    required={question.required}
                    value={formState.values.answers[question.id]?.answer ?? ""}
                  />
                )}
                {question.options.length > 0 && (
                  <Select
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChangeAnswer(e, question)
                    }
                    required={question.required}
                    value={formState.values.answers[question.id]?.answer ?? ""}
                  >
                    <FormattedMessage id="manageTicket.notAnswered">
                      {copy => <option value="">{copy}</option>}
                    </FormattedMessage>

                    {question.options.map(option => (
                      <option value={option.id} key={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </Select>
                )}
              </InputWrapper>
            ))}

            <Box>
              <Button>
                <FormattedMessage id="manageTicket.save" />
              </Button>
              <Link
                sx={{
                  display: ["block", "inline-block", null, null],
                  ml: [0, 3],
                  mt: [3, 0],
                }}
                href="/:language/profile"
              >
                <FormattedMessage id="manageTicket.goBack" />
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
