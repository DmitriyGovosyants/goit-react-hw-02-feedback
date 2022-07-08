import styled from "@emotion/styled";

export const ControlsList = styled.ul`
  display: flex;
  margin-top: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(5)};
`

export const ControlsItem = styled.li`
  background-color: ${p => p.theme.colors.btnBackground};
  border-radius: 10px;
  :not(:last-child) {
    margin-right: ${p => p.theme.spacing(3)};
  }
`

export const Button = styled.button`
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.spacing(2)};
`

export const StatisticsList = styled.ul`
  margin-top: ${p => p.theme.spacing(5)};
`

export const StatisticsItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(2)};
  }
`

export const Value = styled.span`
  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: 500;
`
