import React from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Image from "../components/Image";
import Input from "../components/Input";
import Text from "../components/Text";

const EventHandling = () => {
  return (
    <>
      <div id="event">
        <h1>Event Handling</h1>
        <div>
          <Button>Button</Button>
        </div>
        <div>
          <Image />
        </div>
        <div>
          <Input placeholder="Enter Something.." />
        </div>
        <div>
          <Text />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </>
  );
};

export default EventHandling;
