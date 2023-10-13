import { R as RSVPs } from "../../../chunks/RSVPs.js";
import { ObjectId } from "mongodb";
async function load({ context }) {
  const data = await RSVPs.find().sort({ NPU: "asc" }).toArray();
  return {
    RSVPs: JSON.parse(JSON.stringify(data))
  };
}
const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    console.log(data);
    const RSVPid = data.get("_id");
    console.log(new ObjectId(RSVPid));
    await RSVPs.deleteOne({ _id: new ObjectId(RSVPid) }).then((Response) => {
      console.log(Response);
    }).catch((err) => {
      console.log(err);
    });
  }
};
export {
  actions,
  load
};
