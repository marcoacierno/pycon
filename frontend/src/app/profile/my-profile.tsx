/** @jsx jsx */
import { Box, Grid, Heading } from "@theme-ui/components";
import { FormattedMessage } from "react-intl";
import { jsx } from "theme-ui";

import { InputWrapper } from "../../components/input-wrapper";
import { Link } from "../../components/link";
import { MyProfileQuery } from "../../generated/graphql-backend";
import { useCountries } from "../../helpers/use-countries";

export const MyProfile: React.SFC<{ profile: MyProfileQuery }> = ({
  profile: { me },
}) => {
  const countries = useCountries();
  const profileView = [
    {
      label: "profile.fullName",
      value: me.fullName ? (
        me.fullName
      ) : (
        <FormattedMessage id="profile.notSet" />
      ),
    },
    {
      label: "profile.country",
      value: me.country ? (
        countries.find(c => c.value === me.country)?.label
      ) : (
        <FormattedMessage id="profile.notSet" />
      ),
    },
    {
      label: "profile.name",
      value: me.name ? me.name : <FormattedMessage id="profile.notSet" />,
    },
    {
      label: "profile.gender",
      value: (
        <FormattedMessage
          id={me.gender ? `profile.gender.${me.gender}` : `profile.notSet`}
        />
      ),
    },
    {
      label: "profile.email",
      value: me.email ? me.email : <FormattedMessage id="profile.notSet" />,
    },
    {
      label: "profile.dateBirth",
      value: me.dateBirth ? (
        me.dateBirth
      ) : (
        <FormattedMessage id="profile.notSet" />
      ),
    },
  ];

  return (
    <Box
      sx={{
        borderTop: "primary",
      }}
    >
      <Grid
        sx={{
          maxWidth: "container",
          mx: "auto",
          my: 4,
          px: 3,
          gridTemplateColumns: ["1fr", null, "1.1fr 1fr"],
        }}
      >
        <Box>
          <Heading mb={4} as="h1">
            <FormattedMessage id="profile.profileHeader" />
          </Heading>

          <Link href={`/:language/profile/edit/`} variant="button">
            <FormattedMessage id="profile.editProfile" />
          </Link>

          <Grid
            as="ul"
            sx={{
              listStyle: "none",
              gridTemplateColumns: ["1fr", "1fr 1fr"],
              gridColumnGap: [5, 6],
              gridRowGap: [3, 4],
              my: [3, 4],
            }}
          >
            {profileView
              .filter(({ value }) => typeof value !== "undefined")
              .map(({ value, label }) => (
                <InputWrapper
                  as="li"
                  sx={{ mt: 0, mb: 0 }}
                  key={label}
                  label={<FormattedMessage id={label} />}
                >
                  {value}
                </InputWrapper>
              ))}
          </Grid>

          <InputWrapper
            sx={{
              mb: [3, 4],
            }}
            label={<FormattedMessage id="profile.openToNewsletter" />}
          >
            {me.openToNewsletter ? (
              <FormattedMessage id="global.yes" />
            ) : (
              <FormattedMessage id="global.no" />
            )}
          </InputWrapper>

          <InputWrapper
            sx={{ mb: 0 }}
            label={<FormattedMessage id="profile.openToRecruiting" />}
          >
            {me.openToRecruiting ? (
              <FormattedMessage id="global.yes" />
            ) : (
              <FormattedMessage id="global.no" />
            )}
          </InputWrapper>
        </Box>

        <Box>{/* implement avatar here soon-ish */}</Box>
      </Grid>
    </Box>
  );
};
