/** @jsx jsx */
import { Box, Grid, Heading } from "@theme-ui/components";
import { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { jsx } from "theme-ui";

import { Link } from "../../components/link";
import { MyProfileQuery } from "../../generated/graphql-backend";

type Props = {
  className?: string;
  tickets: MyProfileQuery["me"]["tickets"];
};

const Head: React.SFC<{ className?: string }> = ({ children, className }) => (
  <Box
    className={className}
    sx={{
      fontWeight: "bold",
      color: "orange",
      textTransform: "uppercase",
      pb: 3,
    }}
  >
    {children}
  </Box>
);

const Content: React.SFC = ({ children }) => (
  <Box
    sx={{
      py: 3,
      borderTop: "primary",
    }}
  >
    {children}
  </Box>
);

export const MyTickets: React.SFC<Props> = ({ className, tickets }) => (
  <Box className={className}>
    <Box
      sx={{
        maxWidth: "container",
        mx: "auto",
      }}
    >
      <Heading mb={4} as="h2" sx={{ fontSize: 5 }}>
        <FormattedMessage id="profile.myTicketsHeader" />
      </Heading>

      <Grid
        sx={{
          gridTemplateColumns: "1fr 1fr 1fr",
          gridColumnGap: 0,
          gridRowGap: 0,
        }}
      >
        <Head>Ticket</Head>
        <Head
          sx={{
            gridColumn: "2/4",
          }}
        >
          Attendee name
        </Head>

        {tickets.map(ticket => (
          <Fragment key={ticket.id}>
            <Content>{ticket.ticketName}</Content>
            <Content>{ticket.attendeeName}</Content>
            <Content>
              <Link href={`/:language/manage/ticket/${ticket.id}/`}>
                <FormattedMessage id="profile.manageTicket" />
              </Link>
            </Content>
          </Fragment>
        ))}
      </Grid>
    </Box>
  </Box>
);
