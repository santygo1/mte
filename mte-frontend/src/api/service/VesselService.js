import axios from "axios";

export default class VesselService {

    static async getById(id) {
        // TODO: После MTE-15, будет реализовано в MTE-16
        // const response = await axios.get(`/api/v1/vessels/${id}`);
        //return response.data;
        return {
            vesselId: 'asdasd',
            name: "VITYAZ",
            flag: "RU",
            type: 8,
            length: 77,
            port: "VLADIUOSTOK",
            mmsi: "001001001"
        };
    }


}