import { EventStoreDBClient } from "@eventstore/db-client";
import { jsonEvent } from '@eventstore/db-client';

const client = EventStoreDBClient.connectionString("esdb://localhost:2113?tls=false");


const stream_data = "Sample Data";

const event = jsonEvent({
  type: "Sample_Type",
  data: {
     stream_data
   },
});

await client.appendToStream(stream_data, event);
client.dispose();

