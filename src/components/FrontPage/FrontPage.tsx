import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Input,
  Popup,
} from "semantic-ui-react";
import { useCountdown } from "src/hooks/countDown";
import styles from "./FrontPage.module.scss";
import { getNewTimer } from "src/functions/getNewTimer";
import { validateLink } from "src/functions/validateLink";
import {
  INPUT_PLACEHOLDER,
  POPUP_TEXT,
  REMINDER_TEXT,
} from "src/constants/FrontPageConstants";

interface Props {
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  working: boolean;
  setWorking: React.Dispatch<React.SetStateAction<boolean>>;
  timer: number;
}

const FrontPage: React.FC<Props> = ({ link, setLink, setWorking, timer }) => {
  const [validate, setValidate] = useState<boolean | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [targetDate, setTargetDate] = useState<Date>(new Date());
  const [minutes, seconds] = useCountdown(targetDate);

  useEffect(() => {
    setTargetDate(getNewTimer(timer));
  }, [timer]);

  useEffect(() => {
    if (link.length > 0 && validate === false) setValidate(undefined);
  }, [link]);

  const handleClick = async (link: string) => {
    if (validateLink(link)) {
      setLoading(true);
      setWorking(true);
    } else {
      setValidate(false);
    }
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <div>
      <Header as="h1">Never Sleep Again</Header>
      <div className={styles.input}>
        <Container>
          <Input
            value={link}
            size="big"
            fluid
            placeholder={INPUT_PLACEHOLDER}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLink(e.target.value)
            }
          />
        </Container>
      </div>
      <Grid columns="two" divided>
        <Grid.Row>
          <Grid.Column>
            <Popup
              content={POPUP_TEXT}
              on="click"
              disabled={validate || loading || link.length === 0}
              trigger={
                <Button
                  loading={loading}
                  disabled={validate === false}
                  content="Submit"
                  onClick={() => handleClick(link)}
                />
              }
            />
          </Grid.Column>
          <Grid.Column>
            <Button content="Reset" onClick={reset} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <p className={styles.input}>{REMINDER_TEXT}</p>
      {(minutes > 0 || seconds > 0) && (
        <h3>{`Countdown Timer: ${(minutes < 10 ? "0" : "") + minutes} minutes ${
          (seconds < 10 ? "0" : "") + seconds
        } seconds before the next call`}</h3>
      )}
      <div />
    </div>
  );
};

export default FrontPage;
