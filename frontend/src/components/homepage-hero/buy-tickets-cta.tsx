/** @jsx jsx */
import React from "react";
import { jsx, useThemeUI } from "theme-ui";

export const BuyTicketsCTA: React.SFC = props => {
  const { theme } = useThemeUI();

  return (
    <svg
      viewBox="0 0 151 151"
      width={151}
      height={151}
      fill="none"
      {...props}
      sx={
        {
          "--fill": "white",
          "&:hover": {
            "--fill": theme.colors?.yellow,
          },
        } as any
      }
    >
      <path
        d="M75.5 148.271c40.19 0 72.771-32.581 72.771-72.771S115.69 2.729 75.501 2.729C35.31 2.729 2.728 35.309 2.728 75.5c0 40.19 32.58 72.771 72.771 72.771z"
        stroke="#1D1D1B"
        strokeWidth={4}
        strokeMiterlimit={10}
        sx={{
          fill: "var(--fill)",
        }}
      />
      <path
        d="M75.5 111.886c20.095 0 36.385-16.29 36.385-36.386 0-20.095-16.29-36.386-36.385-36.386S39.114 55.404 39.114 75.5c0 20.095 16.29 36.386 36.386 36.386z"
        fill="#79CDE0"
        stroke="#1D1D1B"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <path
        d="M76.773 25.16l1.82-12.97 6.313.872c3.547.492 5.166 1.856 4.857 4.094-.182 1.346-1.019 2.165-2.492 2.474 1.655.819 2.383 1.965 2.165 3.457-.182 1.237-.783 2.11-1.802 2.62-1.018.509-2.437.636-4.257.381l-6.604-.927zm6.695-1.291c1.001.146 1.765.11 2.256-.11.492-.218.783-.618.873-1.218.092-.6-.09-1.092-.509-1.437-.418-.364-1.128-.6-2.11-.746l-3.675-.51-.491 3.512 3.656.509zm.728-5.622c.855.128 1.51.073 1.947-.109.436-.2.691-.564.764-1.091.073-.51-.091-.91-.455-1.183-.382-.291-1.037-.491-1.965-.619l-3.438-.472-.419 3.001 3.566.473zM104.79 19.466l2.675 1.22-3.148 6.912c-.818 1.783-1.892 2.893-3.256 3.33-1.365.436-3.038.218-5.003-.692-1.965-.891-3.239-2-3.803-3.329-.563-1.31-.436-2.874.364-4.639l3.148-6.913 2.674 1.219-3.22 7.058c-.473 1.02-.546 1.892-.255 2.602.291.71.983 1.31 2.074 1.82 1.092.49 2.001.618 2.73.381.727-.236 1.327-.873 1.8-1.91l3.22-7.059zM107.01 36.622l3.42-3.966.928-9.57 2.492 2.147-.746 6.622 6.477-1.691 2.401 2.074-9.332 2.328-3.421 3.966-2.219-1.91zM120.873 54.324l9.787-4.221-2.037-4.712 2.237-.964 5.24 12.134-2.238.965-2.037-4.712-9.788 4.22-1.164-2.71zM124.002 63.074l12.771-2.874.637 2.856-12.771 2.875-.637-2.857zM130.187 81.667c-1.564-.182-2.765-.855-3.638-2.037-.873-1.183-1.31-2.747-1.346-4.694-.019-1.474.218-2.765.746-3.875.527-1.11 1.291-1.965 2.31-2.583 1.019-.619 2.256-.946 3.693-.965 1.365-.018 2.565.237 3.602.8a6.117 6.117 0 012.475 2.475c.6 1.092.909 2.383.946 3.875.072 3.639-1.383 5.858-4.367 6.695l-.4-2.91c.855-.328 1.474-.783 1.856-1.365.364-.582.546-1.383.527-2.383-.018-1.31-.436-2.33-1.255-3.075-.8-.746-1.91-1.11-3.311-1.073-1.401.018-2.492.418-3.275 1.2-.782.783-1.146 1.838-1.128 3.184.018 1.092.237 1.947.655 2.565.419.619 1.037 1.019 1.874 1.22l.036 2.946zM122.564 93.001l7.678-2.91-1.237-2.73-4.494-1.273.801-2.82 12.607 3.566-.8 2.82-5.222-1.474 3.475 7.696-.964 3.42-3.056-6.731-9.697 3.711.909-3.275zM120.945 97.131l11.171 6.859-5.731 9.351-2.056-1.255 4.203-6.841-2.347-1.437-4.003 6.513-2.055-1.255 4.002-6.513-2.674-1.638-4.421 7.186-1.856-1.564 5.767-9.406zM111.158 110.63l7.368 7.696 3.711-3.548 1.692 1.765-9.533 9.133-1.692-1.765 3.711-3.548-7.368-7.695 2.111-2.038zM101.115 129.26c.528.418 1.074.636 1.656.636.582 0 1.273-.218 2.074-.673.909-.491 1.546-1 1.91-1.473.364-.473.418-.946.182-1.383-.218-.4-.528-.637-.928-.655-.4-.018-1.019.109-1.874.418l-2.565.928c-1.528.546-2.765.71-3.73.51-.964-.2-1.71-.801-2.255-1.783-.6-1.11-.6-2.238 0-3.384.618-1.128 1.8-2.183 3.565-3.147 1.274-.692 2.42-1.128 3.421-1.292 1-.164 1.892-.055 2.674.309s1.474 1.001 2.074 1.892l-2.583 1.419c-.51-.691-1.128-1.073-1.856-1.128-.71-.054-1.601.2-2.656.764-.946.51-1.583 1.037-1.929 1.547-.345.509-.382 1.019-.109 1.51.218.4.546.618.982.673.437.055 1.038-.055 1.765-.346l2.074-.782c1.692-.637 3.038-.873 4.075-.71 1.037.164 1.82.765 2.384 1.783.382.692.491 1.401.327 2.147-.145.746-.564 1.474-1.237 2.201-.673.728-1.583 1.401-2.711 2.02-1.564.855-2.929 1.255-4.057 1.201-1.146-.055-2.147-.564-3.038-1.529l2.365-1.673zM90.018 129.314l.4 2.402-11.043 1.801-.4-2.402 11.043-1.801zM77.246 125.821l-1.037 13.063-6.349-.51c-3.566-.291-5.276-1.546-5.094-3.784.11-1.346.892-2.219 2.347-2.62-1.692-.709-2.492-1.819-2.365-3.311.09-1.237.637-2.146 1.637-2.729 1-.564 2.402-.782 4.221-.636l6.64.527zm-6.604 1.692c-1.018-.073-1.764 0-2.237.237-.492.236-.746.655-.8 1.273-.055.6.145 1.074.581 1.401.437.327 1.165.528 2.165.619l3.694.291.272-3.53-3.675-.291zm-.382 5.658c-.873-.073-1.51 0-1.928.237-.418.218-.655.6-.691 1.146-.037.509.145.891.527 1.164.4.255 1.074.419 2.001.491l3.457.273.237-3.02-3.603-.291zM49.593 133.189l-2.747-1.055 2.73-7.095c.709-1.819 1.727-3.002 3.056-3.529 1.328-.528 3.02-.401 5.039.382 2.02.782 3.347 1.801 3.984 3.092.637 1.274.6 2.838-.09 4.658l-2.73 7.095-2.747-1.055 2.784-7.241c.4-1.055.436-1.928.109-2.62-.328-.691-1.055-1.255-2.183-1.692-1.11-.436-2.038-.509-2.748-.218-.709.291-1.273.964-1.673 2.001l-2.784 7.277zM46.373 116.215l-3.166 4.167-.363 9.624-2.62-1.983.346-6.659-6.35 2.074-2.529-1.928 9.17-2.893 3.165-4.166 2.347 1.764zM31.473 99.314l-9.515 4.803 2.31 4.585-2.182 1.091-5.95-11.789 2.184-1.091 2.31 4.584 9.515-4.802 1.328 2.62zM27.817 90.764l-12.59 3.62-.818-2.82 12.59-3.62.818 2.82zM20.558 72.535c1.564.09 2.82.69 3.747 1.819.928 1.128 1.474 2.656 1.62 4.62.109 1.456-.055 2.766-.51 3.912a5.942 5.942 0 01-2.165 2.73c-.982.672-2.201 1.073-3.62 1.182-1.346.109-2.565-.091-3.639-.6a6.054 6.054 0 01-2.601-2.33c-.655-1.054-1.074-2.346-1.183-3.82-.273-3.638 1.037-5.949 3.966-6.95l.564 2.875c-.837.364-1.437.855-1.765 1.474-.327.6-.454 1.419-.382 2.42.091 1.31.583 2.31 1.42 3.001.854.691 1.964.983 3.365.892 1.4-.11 2.474-.565 3.202-1.383.728-.819 1.037-1.892.946-3.238-.09-1.092-.346-1.929-.8-2.511-.455-.6-1.092-.964-1.947-1.11l-.218-2.983zM27.489 60.837l-7.495 3.365 1.4 2.656 4.567 1.001-.619 2.875-12.79-2.802.62-2.875 5.312 1.165-3.93-7.46.764-3.474 3.457 6.531 9.46-4.275-.746 3.293zM28.854 56.616L17.3 50.449l5.167-9.679 2.129 1.128-3.785 7.077 2.42 1.292 3.602-6.75 2.129 1.128-3.602 6.75 2.765 1.473 3.984-7.44 1.947 1.455-5.203 9.733zM37.823 42.553l-7.805-7.259-3.493 3.766-1.783-1.656 8.987-9.678 1.783 1.655-3.493 3.766 7.805 7.26-2.001 2.146zM46.737 23.378c-.546-.382-1.11-.564-1.692-.528-.582.037-1.255.31-2.037.782-.874.546-1.492 1.074-1.82 1.601-.327.528-.364.965-.109 1.383.255.4.564.6.964.6s1.02-.163 1.838-.527l2.51-1.074c1.492-.636 2.73-.873 3.694-.727.964.145 1.764.691 2.346 1.655.674 1.074.746 2.202.2 3.366-.545 1.164-1.673 2.292-3.365 3.347-1.237.764-2.347 1.274-3.347 1.492-1.001.219-1.893.164-2.693-.145-.8-.31-1.528-.91-2.183-1.765l2.51-1.565c.564.655 1.201 1.001 1.91 1.02.728.017 1.583-.292 2.602-.929.91-.564 1.528-1.128 1.838-1.655.309-.528.309-1.037.018-1.51a1.26 1.26 0 00-1.019-.619c-.437-.018-1.019.128-1.746.437l-2.038.91c-1.637.745-2.984 1.055-4.02.945-1.038-.109-1.874-.654-2.493-1.637-.418-.673-.564-1.364-.455-2.11.11-.746.473-1.51 1.11-2.256.637-.746 1.492-1.492 2.583-2.165 1.51-.946 2.838-1.437 3.984-1.455 1.147-.019 2.184.436 3.111 1.346l-2.2 1.783zM57.817 22.632l-.528-2.383 10.916-2.456.527 2.383-10.915 2.456z"
        fill="#000"
      />
      <path
        d="M64.457 87.78V71.643l-5.04 3.093-2.11-3.348 7.823-4.984h4.057V87.78h-4.73zM86.106 87.78V71.643l-5.04 3.093-2.11-3.348 7.823-4.984h4.057V87.78h-4.73z"
        fill="#1D1D1B"
      />
    </svg>
  );
};
