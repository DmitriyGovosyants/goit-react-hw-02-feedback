import styled from "@emotion/styled";

export const StatisticsList = styled.ul`
  margin-top: ${p => p.theme.spacing(5)};
`

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(2)};
  }
`

export const Value = styled.span`
  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: 500;
`