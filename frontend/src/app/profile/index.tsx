/** @jsx jsx */
import { useQuery } from "@apollo/react-hooks";
import { navigate, RouteComponentProps } from "@reach/router";
import { Box, Text } from "@theme-ui/components";
import { Fragment, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { jsx } from "theme-ui";

import { Alert } from "../../components/alert";
import { useConference } from "../../context/conference";
import { useCurrentLanguage } from "../../context/language";
import {
  MyProfileQuery,
  MyProfileQueryVariables,
} from "../../generated/graphql-backend";
import { useLoginState } from "./hooks";
import { Logout } from "./logout";
import { MyOrders } from "./my-orders";
import { MyProfile } from "./my-profile";
import { MySubmissions } from "./my-submissions";
import { MyTickets } from "./my-tickets";
import MY_PROFILE_QUERY from "./profile.graphql";

export const ProfileApp: React.SFC<RouteComponentProps> = () => {
  const [_, setLoginState] = useLoginState();
  const lang = useCurrentLanguage();
  const { code } = useConference();

  const { loading, error, data: profileData } = useQuery<
    MyProfileQuery,
    MyProfileQueryVariables
  >(MY_PROFILE_QUERY, {
    variables: {
      conference: code,
      language: lang,
    },
  });

  useEffect(() => {
    const loginUrl = `/${lang}/login`;

    if (error) {
      setLoginState(false);

      navigate(loginUrl);
    }
  }, [error]);

  if (loading) {
    return (
      <Box
        sx={{
          maxWidth: "container",
          mx: "auto",
          px: 3,
        }}
      >
        {loading && (
          <Alert variant="info">
            <FormattedMessage id="profile.loading" />
          </Alert>
        )}
      </Box>
    );
  }

  if (error || !profileData) {
    return null;
  }

  return (
    <Fragment>
      <MyProfile profile={profileData} />

      {profileData.me.tickets.length > 0 && (
        <MyTickets
          tickets={profileData.me.tickets}
          sx={{
            borderTop: "primary",
            py: 4,

            "> div": {
              px: 3,
            },
          }}
        />
      )}

      {profileData.me.orders.length > 0 && (
        <MyOrders orders={profileData.me.orders} />
      )}

      <MySubmissions
        sx={{
          borderTop: "primary",
          mb: 4,

          "> div": {
            px: 3,
          },
        }}
      />

      <Logout lang={lang} />
    </Fragment>
  );
};
