import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Input,
  Popup,
} from "semantic-ui-react";
import styles from "./FrontPage.module.scss";

const FrontPage = () => {
  const [link, setLink] = useState<string>("");
  const [validate, setValidate] = useState<boolean | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (link.length > 0 && validate === false) setValidate(undefined);
  }, [link]);

  const handleClick = () => {
    var httpProtocol;

    try {
      httpProtocol = new URL(link).protocol;
      if (!Boolean(httpProtocol === "http:" || httpProtocol === "https:"))
        throw "";
    } catch {
      setValidate(false);
      return;
    }
    setLoading(true);
  };

  const reset = () => {
    setLink("");
    setValidate(false);
    setLoading(false);
  };

  console.log("validate", validate);

  return (
    <div>
      <Header as="h1">Never Sleep Again</Header>
      <div className={styles.input}>
        <Container>
          <Input
            value={link}
            size="big"
            fluid
            placeholder="Please insert any link"
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
              content="Please insert a valid link"
              on="click"
              disabled={validate || loading || link.length === 0}
              trigger={
                <Button
                  loading={loading}
                  disabled={validate === false}
                  content="Submit"
                  onClick={handleClick}
                />
              }
            />
          </Grid.Column>
          <Grid.Column>
            <Button content="Reset" onClick={reset} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <p className={styles.input}>
        This app aims to help user keep their hosted api/page receive requests
        for testing their own api/page's stability. The request time is fixed
        for every 25 mins.
      </p>
    </div>
  );
};

export default FrontPage;
