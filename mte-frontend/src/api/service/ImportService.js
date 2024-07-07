import axios from "axios";


export default class ImportService {
    static async importData() {
        for (const m of marine) {
            await axios
                .post('/api/v1/marineZones', m)
        }

        for (const v of vessels) {
            await axios
                .post(`/api/v1/vessels`, v);

        }
        for (const t of trajectories) {
            await axios
                .post('/api/v1/trajectories', t);

        }
    }
}


const vessels = [
    {
        "vesselId": "668527f01b137620c70451e3",
        "mmsi": "300997316",
        "name": "VITYAZ",
        "flag": "RU",
        "type": 8,
        "length": 77,
        "port": "ULADIUOSTOK",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f11b137620c70451e4",
        "mmsi": "316518859",
        "name": "GEROY",
        "flag": "RU",
        "type": 7,
        "length": 106,
        "port": "WLADIVOSTOK",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f11b137620c70451e5",
        "mmsi": "619034608",
        "name": "FESCO NOVIK",
        "flag": "RU",
        "type": 7,
        "length": 133,
        "port": "PKC__VVO",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f11b137620c70451e6",
        "mmsi": "421007359",
        "name": "MCC SHENZHEN",
        "flag": "AG",
        "type": 7,
        "length": 171,
        "port": "VOSTOCHNYY",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f21b137620c70451e7",
        "mmsi": "226862668",
        "name": "PEARL HALO",
        "flag": "PA",
        "type": 7,
        "length": 189,
        "port": "VVO",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f21b137620c70451e8",
        "mmsi": "179318219",
        "name": "GAOXIN16",
        "flag": "SL",
        "type": 7,
        "length": 144,
        "port": "KR_BUSAN",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f21b137620c70451e9",
        "mmsi": "337671955",
        "name": "PORT MAY",
        "flag": "RU",
        "type": 7,
        "length": 97,
        "port": "VVO",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f21b137620c70451ea",
        "mmsi": "920016087",
        "name": "PORTUN",
        "flag": "RU",
        "type": 8,
        "length": 74,
        "port": "VLDV",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f21b137620c70451eb",
        "mmsi": "168078352",
        "name": "BBC KWIATKOWSKI",
        "flag": "AG",
        "type": 7,
        "length": 122,
        "port": "VLADIVOSTOK",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f31b137620c70451ec",
        "mmsi": "429114999",
        "name": "TANIR",
        "flag": "RU",
        "type": 7,
        "length": 132,
        "port": "VLADIVOSTOK",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f31b137620c70451ed",
        "mmsi": "142469865",
        "name": "CHARA",
        "flag": "RU",
        "type": 7,
        "length": 119,
        "port": "JP_TOS",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f31b137620c70451ee",
        "mmsi": "622320112",
        "name": "NOTO III",
        "flag": "PA",
        "type": 7,
        "length": 130,
        "port": "VVO",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f31b137620c70451ef",
        "mmsi": "639325833",
        "name": "SHINNING RICH",
        "flag": "BZ",
        "type": 7,
        "length": 99,
        "port": "VVO",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f31b137620c70451f0",
        "mmsi": "650401800",
        "name": "NIKOLAY IVANOV",
        "flag": "RU",
        "type": 3,
        "length": 46,
        "port": "NAKHODKA",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f41b137620c70451f1",
        "mmsi": "598060155",
        "name": "ASTONGATE",
        "flag": "KH",
        "type": 7,
        "length": 104,
        "port": "VLADIVOSTOK",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f41b137620c70451f2",
        "mmsi": "999980789",
        "name": "NAYADA",
        "flag": "RU",
        "type": 7,
        "length": 118,
        "port": "VUO",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    },
    {
        "vesselId": "668527f41b137620c70451f3",
        "mmsi": "356894015",
        "name": "S. CHEREDNICHENKO",
        "flag": "RU",
        "type": 4,
        "length": 23,
        "port": "VLADIVOSTOK",
        "_class": "ru.danilspirin.mteapibase.application.model.vessel.VesselModel"
    }
]

const trajectories = [
    {
        "id": "6684fa96aebe9942dd90ac81",
        "vesselId": "668527f11b137620c70451e5",
        "from": "source",
        "to": "destination",
        "coordinates": [{
            "lat": 43.0905,
            "lon": 131.869,
            "timestamp": "2/19/2016 17:54",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0907,
            "lon": 131.869,
            "timestamp": "2/19/2016 18:26",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0908,
            "lon": 131.87,
            "timestamp": "2/19/2016 20:47",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0918,
            "lon": 131.871,
            "timestamp": "2/19/2016 20:51",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0928,
            "lon": 131.872,
            "timestamp": "2/19/2016 20:53",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.093,
            "lon": 131.872,
            "timestamp": "2/19/2016 20:57",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0925,
            "lon": 131.872,
            "timestamp": "2/21/2016 1:07",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0918,
            "lon": 131.872,
            "timestamp": "2/21/2016 1:08",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0905,
            "lon": 131.871,
            "timestamp": "2/21/2016 1:10",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0888,
            "lon": 131.871,
            "timestamp": "2/21/2016 1:10",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0868,
            "lon": 131.871,
            "timestamp": "2/21/2016 1:11",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0847,
            "lon": 131.871,
            "timestamp": "2/21/2016 1:12",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0825,
            "lon": 131.871,
            "timestamp": "2/21/2016 1:13",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0805,
            "lon": 131.872,
            "timestamp": "2/21/2016 1:14",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.079,
            "lon": 131.873,
            "timestamp": "2/21/2016 1:15",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0775,
            "lon": 131.875,
            "timestamp": "2/21/2016 1:16",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.076,
            "lon": 131.877,
            "timestamp": "2/21/2016 1:18",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0742,
            "lon": 131.878,
            "timestamp": "2/21/2016 1:18",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0727,
            "lon": 131.881,
            "timestamp": "2/21/2016 1:20",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0717,
            "lon": 131.884,
            "timestamp": "2/21/2016 1:21",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0703,
            "lon": 131.887,
            "timestamp": "2/21/2016 1:22",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.069,
            "lon": 131.89,
            "timestamp": "2/21/2016 1:23",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0678,
            "lon": 131.893,
            "timestamp": "2/21/2016 1:24",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0668,
            "lon": 131.895,
            "timestamp": "2/21/2016 1:25",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0657,
            "lon": 131.898,
            "timestamp": "2/21/2016 1:26",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0642,
            "lon": 131.902,
            "timestamp": "2/21/2016 1:27",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0632,
            "lon": 131.904,
            "timestamp": "2/21/2016 1:28",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0622,
            "lon": 131.906,
            "timestamp": "2/21/2016 1:29",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0612,
            "lon": 131.909,
            "timestamp": "2/21/2016 1:30",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.06,
            "lon": 131.911,
            "timestamp": "2/21/2016 1:32",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.059,
            "lon": 131.914,
            "timestamp": "2/21/2016 1:32",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0578,
            "lon": 131.917,
            "timestamp": "2/21/2016 1:33",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0567,
            "lon": 131.92,
            "timestamp": "2/21/2016 1:35",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0557,
            "lon": 131.922,
            "timestamp": "2/21/2016 1:36",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0547,
            "lon": 131.925,
            "timestamp": "2/21/2016 1:37",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0533,
            "lon": 131.928,
            "timestamp": "2/21/2016 1:38",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0522,
            "lon": 131.93,
            "timestamp": "2/21/2016 1:39",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0512,
            "lon": 131.933,
            "timestamp": "2/21/2016 1:40",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0502,
            "lon": 131.935,
            "timestamp": "2/21/2016 1:41",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.049,
            "lon": 131.938,
            "timestamp": "2/21/2016 1:42",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0478,
            "lon": 131.941,
            "timestamp": "2/21/2016 1:43",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0463,
            "lon": 131.944,
            "timestamp": "2/21/2016 1:45",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.045,
            "lon": 131.947,
            "timestamp": "2/21/2016 1:45",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0435,
            "lon": 131.951,
            "timestamp": "2/21/2016 1:46",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.042,
            "lon": 131.954,
            "timestamp": "2/21/2016 1:47",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0403,
            "lon": 131.957,
            "timestamp": "2/21/2016 1:48",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0387,
            "lon": 131.961,
            "timestamp": "2/21/2016 1:50",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.037,
            "lon": 131.964,
            "timestamp": "2/21/2016 1:51",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0352,
            "lon": 131.967,
            "timestamp": "2/21/2016 1:51",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0335,
            "lon": 131.971,
            "timestamp": "2/21/2016 1:52",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0318,
            "lon": 131.974,
            "timestamp": "2/21/2016 1:53",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.03,
            "lon": 131.977,
            "timestamp": "2/21/2016 1:55",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0283,
            "lon": 131.98,
            "timestamp": "2/21/2016 1:55",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0262,
            "lon": 131.984,
            "timestamp": "2/21/2016 1:56",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0243,
            "lon": 131.988,
            "timestamp": "2/21/2016 1:58",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0228,
            "lon": 131.992,
            "timestamp": "2/21/2016 1:58",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.021,
            "lon": 131.995,
            "timestamp": "2/21/2016 1:59",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0192,
            "lon": 131.999,
            "timestamp": "2/21/2016 2:00",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0165,
            "lon": 132.004,
            "timestamp": "2/21/2016 2:02",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0148,
            "lon": 132.008,
            "timestamp": "2/21/2016 2:03",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0132,
            "lon": 132.011,
            "timestamp": "2/21/2016 2:04",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0115,
            "lon": 132.014,
            "timestamp": "2/21/2016 2:05",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0098,
            "lon": 132.018,
            "timestamp": "2/21/2016 2:07",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0078,
            "lon": 132.021,
            "timestamp": "2/21/2016 2:07",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0057,
            "lon": 132.023,
            "timestamp": "2/21/2016 2:08",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0032,
            "lon": 132.025,
            "timestamp": "2/21/2016 2:09",
            "speed": 18.7,
            "heading": 30.5
        }, {"lat": 43.0002, "lon": 132.028, "timestamp": "2/21/2016 2:10", "speed": 18.7, "heading": 30.5}],
        "_class": "ru.danilspirin.mteapibase.application.model.TrajectoryModel"
    },
    {
        "id": "6684fb97918f88798f3f5f6c",
        "vesselId": "668527f11b137620c70451e4",
        "from": "source",
        "to": "destination",
        "coordinates": [{
            "lat": 43.0919,
            "lon": 131.87,
            "timestamp": "2/19/2016 17:54",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0918,
            "lon": 131.87,
            "timestamp": "2/19/2016 18:39",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0915,
            "lon": 131.87,
            "timestamp": "2/19/2016 20:13",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0909,
            "lon": 131.87,
            "timestamp": "2/19/2016 20:15",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0899,
            "lon": 131.87,
            "timestamp": "2/19/2016 20:16",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0887,
            "lon": 131.87,
            "timestamp": "2/19/2016 20:17",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0869,
            "lon": 131.871,
            "timestamp": "2/19/2016 20:19",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0851,
            "lon": 131.872,
            "timestamp": "2/19/2016 20:19",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0832,
            "lon": 131.873,
            "timestamp": "2/19/2016 20:22",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0814,
            "lon": 131.874,
            "timestamp": "2/19/2016 20:22",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0797,
            "lon": 131.876,
            "timestamp": "2/19/2016 20:23",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0773,
            "lon": 131.878,
            "timestamp": "2/19/2016 20:24",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0752,
            "lon": 131.882,
            "timestamp": "2/19/2016 20:25",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0737,
            "lon": 131.884,
            "timestamp": "2/19/2016 20:26",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0719,
            "lon": 131.887,
            "timestamp": "2/19/2016 20:28",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0704,
            "lon": 131.889,
            "timestamp": "2/19/2016 20:28",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0676,
            "lon": 131.895,
            "timestamp": "2/19/2016 20:30",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0659,
            "lon": 131.898,
            "timestamp": "2/19/2016 20:31",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0633,
            "lon": 131.904,
            "timestamp": "2/19/2016 20:33",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0622,
            "lon": 131.906,
            "timestamp": "2/19/2016 20:35",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0601,
            "lon": 131.911,
            "timestamp": "2/19/2016 20:36",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0591,
            "lon": 131.913,
            "timestamp": "2/19/2016 20:38",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0582,
            "lon": 131.915,
            "timestamp": "2/19/2016 20:38",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0573,
            "lon": 131.917,
            "timestamp": "2/19/2016 20:39",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0562,
            "lon": 131.92,
            "timestamp": "2/19/2016 20:42",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0553,
            "lon": 131.922,
            "timestamp": "2/19/2016 20:43",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0543,
            "lon": 131.924,
            "timestamp": "2/19/2016 20:43",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0523,
            "lon": 131.929,
            "timestamp": "2/19/2016 20:44",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0494,
            "lon": 131.936,
            "timestamp": "2/19/2016 20:47",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0479,
            "lon": 131.939,
            "timestamp": "2/19/2016 20:48",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0456,
            "lon": 131.944,
            "timestamp": "2/19/2016 20:49",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0423,
            "lon": 131.952,
            "timestamp": "2/19/2016 20:51",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0404,
            "lon": 131.956,
            "timestamp": "2/19/2016 20:52",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0381,
            "lon": 131.961,
            "timestamp": "2/19/2016 20:53",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0361,
            "lon": 131.965,
            "timestamp": "2/19/2016 20:55",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0341,
            "lon": 131.969,
            "timestamp": "2/19/2016 20:55",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0321,
            "lon": 131.973,
            "timestamp": "2/19/2016 20:57",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.03,
            "lon": 131.978,
            "timestamp": "2/19/2016 20:57",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0278,
            "lon": 131.983,
            "timestamp": "2/19/2016 20:58",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0234,
            "lon": 131.992,
            "timestamp": "2/19/2016 21:00",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0208,
            "lon": 131.997,
            "timestamp": "2/19/2016 21:01",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0181,
            "lon": 132.002,
            "timestamp": "2/19/2016 21:03",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0133,
            "lon": 132.009,
            "timestamp": "2/19/2016 21:04",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0104,
            "lon": 132.014,
            "timestamp": "2/19/2016 21:06",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0075,
            "lon": 132.018,
            "timestamp": "2/19/2016 21:06",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0042,
            "lon": 132.023,
            "timestamp": "2/19/2016 21:07",
            "speed": 18.7,
            "heading": 30.5
        }, {"lat": 43.0011, "lon": 132.027, "timestamp": "2/19/2016 21:08", "speed": 18.7, "heading": 30.5}],
        "_class": "ru.danilspirin.mteapibase.application.model.TrajectoryModel"
    },
    {
        "id": "6684fba3918f88798f3f5f6e",
        "vesselId": "668527f11b137620c70451e5",
        "from": "source",
        "to": "destination",
        "coordinates": [{
            "lat": 43.0955,
            "lon": 131.874,
            "timestamp": "2/19/2016 17:54",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0956,
            "lon": 131.874,
            "timestamp": "2/19/2016 18:27",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0954,
            "lon": 131.875,
            "timestamp": "2/20/2016 0:12",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0953,
            "lon": 131.876,
            "timestamp": "2/20/2016 0:14",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0955,
            "lon": 131.876,
            "timestamp": "2/20/2016 0:15",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0948,
            "lon": 131.876,
            "timestamp": "2/20/2016 0:18",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0939,
            "lon": 131.875,
            "timestamp": "2/20/2016 0:19",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0931,
            "lon": 131.874,
            "timestamp": "2/20/2016 0:20",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0918,
            "lon": 131.873,
            "timestamp": "2/20/2016 0:22",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0904,
            "lon": 131.873,
            "timestamp": "2/20/2016 0:23",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0889,
            "lon": 131.873,
            "timestamp": "2/20/2016 0:23",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0872,
            "lon": 131.872,
            "timestamp": "2/20/2016 0:24",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0848,
            "lon": 131.872,
            "timestamp": "2/20/2016 0:25",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0828,
            "lon": 131.871,
            "timestamp": "2/20/2016 0:27",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.08,
            "lon": 131.872,
            "timestamp": "2/20/2016 0:28",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0779,
            "lon": 131.872,
            "timestamp": "2/20/2016 0:30",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0747811252566,
            "lon": 131.87078522134092,
            "timestamp": "2/20/2016 0:30",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0715,
            "lon": 131.878,
            "timestamp": "2/20/2016 0:32",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0703,
            "lon": 131.882,
            "timestamp": "2/20/2016 0:33",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0691,
            "lon": 131.885,
            "timestamp": "2/20/2016 0:34",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0678,
            "lon": 131.888,
            "timestamp": "2/20/2016 0:35",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0668,
            "lon": 131.891,
            "timestamp": "2/20/2016 0:36",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0657,
            "lon": 131.894,
            "timestamp": "2/20/2016 0:37",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0649,
            "lon": 131.897,
            "timestamp": "2/20/2016 0:38",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0638,
            "lon": 131.9,
            "timestamp": "2/20/2016 0:41",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0632,
            "lon": 131.901,
            "timestamp": "2/20/2016 0:42",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0624,
            "lon": 131.903,
            "timestamp": "2/20/2016 0:42",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.062,
            "lon": 131.905,
            "timestamp": "2/20/2016 0:43",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0616,
            "lon": 131.908,
            "timestamp": "2/20/2016 0:44",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0609,
            "lon": 131.91,
            "timestamp": "2/20/2016 0:45",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0597,
            "lon": 131.913,
            "timestamp": "2/20/2016 0:46",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0586,
            "lon": 131.916,
            "timestamp": "2/20/2016 0:47",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0574,
            "lon": 131.919,
            "timestamp": "2/20/2016 0:48",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0561,
            "lon": 131.922,
            "timestamp": "2/20/2016 0:50",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0551,
            "lon": 131.924,
            "timestamp": "2/20/2016 0:51",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0538,
            "lon": 131.927,
            "timestamp": "2/20/2016 0:53",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0528,
            "lon": 131.93,
            "timestamp": "2/20/2016 0:53",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0519,
            "lon": 131.932,
            "timestamp": "2/20/2016 0:55",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.051,
            "lon": 131.934,
            "timestamp": "2/20/2016 0:55",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.05,
            "lon": 131.936,
            "timestamp": "2/20/2016 0:57",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0492,
            "lon": 131.938,
            "timestamp": "2/20/2016 0:57",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0481,
            "lon": 131.941,
            "timestamp": "2/20/2016 0:58",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0472,
            "lon": 131.943,
            "timestamp": "2/20/2016 1:00",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0462,
            "lon": 131.945,
            "timestamp": "2/20/2016 1:00",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0451,
            "lon": 131.948,
            "timestamp": "2/20/2016 1:02",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0439,
            "lon": 131.951,
            "timestamp": "2/20/2016 1:03",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0426,
            "lon": 131.953,
            "timestamp": "2/20/2016 1:03",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0411,
            "lon": 131.956,
            "timestamp": "2/20/2016 1:04",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0395,
            "lon": 131.96,
            "timestamp": "2/20/2016 1:05",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.038,
            "lon": 131.963,
            "timestamp": "2/20/2016 1:07",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0366,
            "lon": 131.966,
            "timestamp": "2/20/2016 1:07",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0348,
            "lon": 131.97,
            "timestamp": "2/20/2016 1:09",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0333,
            "lon": 131.973,
            "timestamp": "2/20/2016 1:10",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0319,
            "lon": 131.976,
            "timestamp": "2/20/2016 1:11",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0304,
            "lon": 131.98,
            "timestamp": "2/20/2016 1:12",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0289,
            "lon": 131.983,
            "timestamp": "2/20/2016 1:12",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0275,
            "lon": 131.986,
            "timestamp": "2/20/2016 1:13",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.026,
            "lon": 131.989,
            "timestamp": "2/20/2016 1:14",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0246,
            "lon": 131.993,
            "timestamp": "2/20/2016 1:15",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0232,
            "lon": 131.996,
            "timestamp": "2/20/2016 1:16",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.022,
            "lon": 131.999,
            "timestamp": "2/20/2016 1:17",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0201,
            "lon": 132.003,
            "timestamp": "2/20/2016 1:19",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0186,
            "lon": 132.007,
            "timestamp": "2/20/2016 1:21",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.017,
            "lon": 132.01,
            "timestamp": "2/20/2016 1:21",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0155,
            "lon": 132.012,
            "timestamp": "2/20/2016 1:23",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.014,
            "lon": 132.016,
            "timestamp": "2/20/2016 1:23",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0125,
            "lon": 132.018,
            "timestamp": "2/20/2016 1:25",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0108,
            "lon": 132.022,
            "timestamp": "2/20/2016 1:25",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0094,
            "lon": 132.025,
            "timestamp": "2/20/2016 1:26",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0079,
            "lon": 132.028,
            "timestamp": "2/20/2016 1:27",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0065,
            "lon": 132.031,
            "timestamp": "2/20/2016 1:28",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.005,
            "lon": 132.034,
            "timestamp": "2/20/2016 1:29",
            "speed": 18.7,
            "heading": 30.5
        }, {"lat": 43.0033, "lon": 132.037, "timestamp": "2/20/2016 1:30", "speed": 18.7, "heading": 30.5}],
        "_class": "ru.danilspirin.mteapibase.application.model.TrajectoryModel"
    },
    {
        "id": "6684fbe1918f88798f3f5f6f",
        "vesselId": "668527f11b137620c70451e6",
        "from": "source",
        "to": "destination",
        "coordinates": [{
            "lat": 43.0984,
            "lon": 131.87,
            "timestamp": "2/19/2016 17:54",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0983,
            "lon": 131.87,
            "timestamp": "2/19/2016 17:56",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0985,
            "lon": 131.87,
            "timestamp": "2/19/2016 18:08",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0981,
            "lon": 131.87,
            "timestamp": "2/19/2016 18:19",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0982,
            "lon": 131.87,
            "timestamp": "2/19/2016 18:44",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.098,
            "lon": 131.87,
            "timestamp": "2/19/2016 19:17",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0985,
            "lon": 131.871,
            "timestamp": "2/19/2016 19:50",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0984,
            "lon": 131.871,
            "timestamp": "2/19/2016 19:52",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0987,
            "lon": 131.872,
            "timestamp": "2/19/2016 19:53",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0988,
            "lon": 131.871,
            "timestamp": "2/19/2016 19:56",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0983,
            "lon": 131.872,
            "timestamp": "2/19/2016 19:57",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0984,
            "lon": 131.874,
            "timestamp": "2/19/2016 19:59",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0976,
            "lon": 131.875,
            "timestamp": "2/19/2016 19:59",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0945,
            "lon": 131.875,
            "timestamp": "2/19/2016 20:01",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0926,
            "lon": 131.874,
            "timestamp": "2/19/2016 20:02",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0907,
            "lon": 131.873,
            "timestamp": "2/19/2016 20:03",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0887,
            "lon": 131.872,
            "timestamp": "2/19/2016 20:04",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0867,
            "lon": 131.871,
            "timestamp": "2/19/2016 20:05",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.08616077695068,
            "lon": 131.87674884131616,
            "timestamp": "2/19/2016 20:06",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.084436257882,
            "lon": 131.8774363006268,
            "timestamp": "2/19/2016 20:07",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.08362173383008,
            "lon": 131.87979638062384,
            "timestamp": "2/19/2016 20:08",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.08139643587636,
            "lon": 131.87919527987378,
            "timestamp": "2/19/2016 20:10",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.08051906370278,
            "lon": 131.88172719720518,
            "timestamp": "2/19/2016 20:11",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.079390813101064,
            "lon": 131.88447381589418,
            "timestamp": "2/19/2016 20:11",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.07710211392135,
            "lon": 131.88670553843107,
            "timestamp": "2/19/2016 20:12",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.075597545825254,
            "lon": 131.89009579197344,
            "timestamp": "2/19/2016 20:14",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0722,
            "lon": 131.888,
            "timestamp": "2/19/2016 20:14",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0708,
            "lon": 131.891,
            "timestamp": "2/19/2016 20:16",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0695,
            "lon": 131.894,
            "timestamp": "2/19/2016 20:17",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0679,
            "lon": 131.897,
            "timestamp": "2/19/2016 20:19",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0659,
            "lon": 131.901,
            "timestamp": "2/19/2016 20:19",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0643,
            "lon": 131.904,
            "timestamp": "2/19/2016 20:20",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0628,
            "lon": 131.907,
            "timestamp": "2/19/2016 20:22",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0612,
            "lon": 131.91,
            "timestamp": "2/19/2016 20:22",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0596,
            "lon": 131.913,
            "timestamp": "2/19/2016 20:23",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0577,
            "lon": 131.916,
            "timestamp": "2/19/2016 20:24",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0555,
            "lon": 131.92,
            "timestamp": "2/19/2016 20:26",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0539,
            "lon": 131.923,
            "timestamp": "2/19/2016 20:28",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0523,
            "lon": 131.926,
            "timestamp": "2/19/2016 20:28",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0507,
            "lon": 131.93,
            "timestamp": "2/19/2016 20:29",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.049,
            "lon": 131.933,
            "timestamp": "2/19/2016 20:30",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0474,
            "lon": 131.936,
            "timestamp": "2/19/2016 20:31",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0457,
            "lon": 131.939,
            "timestamp": "2/19/2016 20:32",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0439,
            "lon": 131.942,
            "timestamp": "2/19/2016 20:33",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0424,
            "lon": 131.946,
            "timestamp": "2/19/2016 20:35",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0414,
            "lon": 131.95,
            "timestamp": "2/19/2016 20:35",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0406,
            "lon": 131.954,
            "timestamp": "2/19/2016 20:36",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0397,
            "lon": 131.958,
            "timestamp": "2/19/2016 20:38",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0392,
            "lon": 131.962,
            "timestamp": "2/19/2016 20:38",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0391,
            "lon": 131.966,
            "timestamp": "2/19/2016 20:39",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.039,
            "lon": 131.971,
            "timestamp": "2/19/2016 20:40",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0388,
            "lon": 131.975,
            "timestamp": "2/19/2016 20:42",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0387,
            "lon": 131.979,
            "timestamp": "2/19/2016 20:43",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0386,
            "lon": 131.983,
            "timestamp": "2/19/2016 20:43",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0385,
            "lon": 131.987,
            "timestamp": "2/19/2016 20:44",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0384,
            "lon": 131.992,
            "timestamp": "2/19/2016 20:45",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0383,
            "lon": 131.996,
            "timestamp": "2/19/2016 20:47",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0382,
            "lon": 132.001,
            "timestamp": "2/19/2016 20:47",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.038,
            "lon": 132.008,
            "timestamp": "2/19/2016 20:49",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0432,
            "lon": 132.01,
            "timestamp": "2/19/2016 20:51",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0462,
            "lon": 132.01,
            "timestamp": "2/19/2016 20:52",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0499,
            "lon": 132.01,
            "timestamp": "2/19/2016 20:53",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0571,
            "lon": 132.01,
            "timestamp": "2/19/2016 20:55",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0598,
            "lon": 132.01,
            "timestamp": "2/19/2016 20:57",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0623,
            "lon": 132.01,
            "timestamp": "2/19/2016 20:57",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0646,
            "lon": 132.01,
            "timestamp": "2/19/2016 20:58",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0682,
            "lon": 132.01,
            "timestamp": "2/19/2016 21:00",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0698,
            "lon": 132.01,
            "timestamp": "2/19/2016 21:03",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0708,
            "lon": 132.009,
            "timestamp": "2/19/2016 21:03",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0719,
            "lon": 132.009,
            "timestamp": "2/19/2016 21:04",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0733,
            "lon": 132.008,
            "timestamp": "2/19/2016 21:06",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0734,
            "lon": 132.007,
            "timestamp": "2/19/2016 21:10",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0735,
            "lon": 132.007,
            "timestamp": "2/19/2016 21:15",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0737,
            "lon": 132.007,
            "timestamp": "2/19/2016 21:19",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0738,
            "lon": 132.007,
            "timestamp": "2/19/2016 21:21",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0739,
            "lon": 132.007,
            "timestamp": "2/19/2016 21:25",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.074,
            "lon": 132.007,
            "timestamp": "2/19/2016 21:31",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0741,
            "lon": 132.007,
            "timestamp": "2/19/2016 21:37",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0742,
            "lon": 132.007,
            "timestamp": "2/19/2016 22:01",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0743,
            "lon": 132.007,
            "timestamp": "2/19/2016 22:54",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0744,
            "lon": 132.007,
            "timestamp": "2/19/2016 23:02",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0745,
            "lon": 132.007,
            "timestamp": "2/19/2016 23:35",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0746,
            "lon": 132.008,
            "timestamp": "2/19/2016 23:48",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0745,
            "lon": 132.008,
            "timestamp": "2/19/2016 23:51",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0743,
            "lon": 132.009,
            "timestamp": "2/19/2016 23:55",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0744,
            "lon": 132.009,
            "timestamp": "2/20/2016 0:00",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0745,
            "lon": 132.009,
            "timestamp": "2/20/2016 0:03",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0746,
            "lon": 132.009,
            "timestamp": "2/20/2016 0:05",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0747,
            "lon": 132.009,
            "timestamp": "2/20/2016 0:11",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0748,
            "lon": 132.009,
            "timestamp": "2/20/2016 0:18",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0742,
            "lon": 132.009,
            "timestamp": "2/20/2016 1:27",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0741,
            "lon": 132.01,
            "timestamp": "2/20/2016 1:30",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0739,
            "lon": 132.01,
            "timestamp": "2/20/2016 1:38",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.074,
            "lon": 132.01,
            "timestamp": "2/20/2016 1:43",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0739,
            "lon": 132.009,
            "timestamp": "2/20/2016 1:51",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0738,
            "lon": 132.01,
            "timestamp": "2/20/2016 1:52",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0741,
            "lon": 132.009,
            "timestamp": "2/20/2016 2:21",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0742,
            "lon": 132.01,
            "timestamp": "2/20/2016 2:24",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.074,
            "lon": 132.009,
            "timestamp": "2/20/2016 4:25",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0738,
            "lon": 132.009,
            "timestamp": "2/20/2016 4:50",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0737,
            "lon": 132.009,
            "timestamp": "2/20/2016 4:53",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0736,
            "lon": 132.009,
            "timestamp": "2/20/2016 4:57",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0735,
            "lon": 132.009,
            "timestamp": "2/20/2016 5:05",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0735,
            "lon": 132.008,
            "timestamp": "2/20/2016 5:13",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0734,
            "lon": 132.008,
            "timestamp": "2/20/2016 5:25",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0736,
            "lon": 132.008,
            "timestamp": "2/20/2016 6:01",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0732,
            "lon": 132.008,
            "timestamp": "2/20/2016 8:25",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0731,
            "lon": 132.008,
            "timestamp": "2/20/2016 9:23",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0731,
            "lon": 132.009,
            "timestamp": "2/20/2016 9:50",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0736,
            "lon": 132.007,
            "timestamp": "2/20/2016 16:02",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0737,
            "lon": 132.008,
            "timestamp": "2/20/2016 21:10",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0724,
            "lon": 132.009,
            "timestamp": "2/20/2016 21:12",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0707,
            "lon": 132.011,
            "timestamp": "2/20/2016 21:13",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0691,
            "lon": 132.012,
            "timestamp": "2/20/2016 21:14",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0658,
            "lon": 132.016,
            "timestamp": "2/20/2016 21:16",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0639,
            "lon": 132.018,
            "timestamp": "2/20/2016 21:17",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0625,
            "lon": 132.02,
            "timestamp": "2/20/2016 21:18",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0608,
            "lon": 132.023,
            "timestamp": "2/20/2016 21:19",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0591,
            "lon": 132.027,
            "timestamp": "2/20/2016 21:21",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0572,
            "lon": 132.03,
            "timestamp": "2/20/2016 21:22",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0554,
            "lon": 132.034,
            "timestamp": "2/20/2016 21:24",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0539,
            "lon": 132.037,
            "timestamp": "2/20/2016 21:25",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0526,
            "lon": 132.039,
            "timestamp": "2/20/2016 21:26",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.051,
            "lon": 132.042,
            "timestamp": "2/20/2016 21:27",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0497,
            "lon": 132.045,
            "timestamp": "2/20/2016 21:28",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.048,
            "lon": 132.048,
            "timestamp": "2/20/2016 21:29",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0467,
            "lon": 132.051,
            "timestamp": "2/20/2016 21:31",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.045,
            "lon": 132.054,
            "timestamp": "2/20/2016 21:32",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0433,
            "lon": 132.057,
            "timestamp": "2/20/2016 21:33",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0419,
            "lon": 132.06,
            "timestamp": "2/20/2016 21:34",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0404,
            "lon": 132.063,
            "timestamp": "2/20/2016 21:35",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0365,
            "lon": 132.068,
            "timestamp": "2/20/2016 21:37",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0343,
            "lon": 132.07,
            "timestamp": "2/20/2016 21:38",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.032,
            "lon": 132.072,
            "timestamp": "2/20/2016 21:39",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0297,
            "lon": 132.075,
            "timestamp": "2/20/2016 21:40",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0266,
            "lon": 132.078,
            "timestamp": "2/20/2016 21:41",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.024,
            "lon": 132.08,
            "timestamp": "2/20/2016 21:42",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0214,
            "lon": 132.083,
            "timestamp": "2/20/2016 21:43",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0188,
            "lon": 132.085,
            "timestamp": "2/20/2016 21:44",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0162,
            "lon": 132.087,
            "timestamp": "2/20/2016 21:46",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0136,
            "lon": 132.09,
            "timestamp": "2/20/2016 21:47",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.011,
            "lon": 132.092,
            "timestamp": "2/20/2016 21:47",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0059,
            "lon": 132.096,
            "timestamp": "2/20/2016 21:49",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0033,
            "lon": 132.099,
            "timestamp": "2/20/2016 21:50",
            "speed": 18.7,
            "heading": 30.5
        }, {"lat": 43.0007, "lon": 132.101, "timestamp": "2/20/2016 21:51", "speed": 18.7, "heading": 30.5}],
        "_class": "ru.danilspirin.mteapibase.application.model.trajectory.TrajectoryModel"
    },
    {
        "id": "6684fbe5918f88798f3f5f70",
        "vesselId": "668527f21b137620c70451e8",
        "from": "source",
        "to": "destination",
        "coordinates": [{
            "lat": 43.0998,
            "lon": 131.871,
            "timestamp": "2/19/2016 17:54",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0997,
            "lon": 131.871,
            "timestamp": "2/19/2016 18:06",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0997,
            "lon": 131.87,
            "timestamp": "2/19/2016 21:36",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0995,
            "lon": 131.871,
            "timestamp": "2/20/2016 2:46",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0998,
            "lon": 131.87,
            "timestamp": "2/20/2016 5:09",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0995,
            "lon": 131.87,
            "timestamp": "2/20/2016 6:48",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0993,
            "lon": 131.87,
            "timestamp": "2/20/2016 6:52",
            "speed": 18.7,
            "heading": 30.5
        }, {"lat": 43.0988, "lon": 131.87, "timestamp": "2/20/2016 8:28", "speed": 18.7, "heading": 30.5}, {
            "lat": 43.1,
            "lon": 131.871,
            "timestamp": "2/20/2016 8:49",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0999,
            "lon": 131.871,
            "timestamp": "2/20/2016 20:20",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0997,
            "lon": 131.872,
            "timestamp": "2/20/2016 22:11",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0988,
            "lon": 131.872,
            "timestamp": "2/20/2016 22:14",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0985,
            "lon": 131.875,
            "timestamp": "2/20/2016 22:18",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.095,
            "lon": 131.876,
            "timestamp": "2/20/2016 22:20",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0893,
            "lon": 131.873,
            "timestamp": "2/20/2016 22:23",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0865,
            "lon": 131.872,
            "timestamp": "2/20/2016 22:24",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0847,
            "lon": 131.87,
            "timestamp": "2/20/2016 22:25",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0828,
            "lon": 131.869,
            "timestamp": "2/20/2016 22:27",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0807,
            "lon": 131.868,
            "timestamp": "2/20/2016 22:28",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.079,
            "lon": 131.868,
            "timestamp": "2/20/2016 22:29",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0775,
            "lon": 131.87,
            "timestamp": "2/20/2016 22:30",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0763,
            "lon": 131.871,
            "timestamp": "2/20/2016 22:32",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0752,
            "lon": 131.873,
            "timestamp": "2/20/2016 22:32",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0743,
            "lon": 131.875,
            "timestamp": "2/20/2016 22:34",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0737,
            "lon": 131.876,
            "timestamp": "2/20/2016 22:34",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.073,
            "lon": 131.878,
            "timestamp": "2/20/2016 22:35",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0723,
            "lon": 131.88,
            "timestamp": "2/20/2016 22:36",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0718,
            "lon": 131.881,
            "timestamp": "2/20/2016 22:37",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0713,
            "lon": 131.882,
            "timestamp": "2/20/2016 22:38",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0707,
            "lon": 131.884,
            "timestamp": "2/20/2016 22:40",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.07,
            "lon": 131.886,
            "timestamp": "2/20/2016 22:42",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0695,
            "lon": 131.887,
            "timestamp": "2/20/2016 22:44",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0692,
            "lon": 131.888,
            "timestamp": "2/20/2016 22:46",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0688,
            "lon": 131.889,
            "timestamp": "2/20/2016 22:47",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0685,
            "lon": 131.89,
            "timestamp": "2/20/2016 22:48",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0678,
            "lon": 131.892,
            "timestamp": "2/20/2016 22:49",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0672,
            "lon": 131.893,
            "timestamp": "2/20/2016 22:51",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0665,
            "lon": 131.895,
            "timestamp": "2/20/2016 22:52",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0657,
            "lon": 131.897,
            "timestamp": "2/20/2016 22:54",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0648,
            "lon": 131.899,
            "timestamp": "2/20/2016 22:54",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.064,
            "lon": 131.9,
            "timestamp": "2/20/2016 22:55",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0623,
            "lon": 131.904,
            "timestamp": "2/20/2016 22:57",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0615,
            "lon": 131.906,
            "timestamp": "2/20/2016 22:58",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0603,
            "lon": 131.909,
            "timestamp": "2/20/2016 22:59",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0592,
            "lon": 131.911,
            "timestamp": "2/20/2016 23:00",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.058,
            "lon": 131.914,
            "timestamp": "2/20/2016 23:01",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0568,
            "lon": 131.917,
            "timestamp": "2/20/2016 23:02",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0555,
            "lon": 131.92,
            "timestamp": "2/20/2016 23:03",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0543,
            "lon": 131.923,
            "timestamp": "2/20/2016 23:05",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.053,
            "lon": 131.926,
            "timestamp": "2/20/2016 23:05",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0518,
            "lon": 131.93,
            "timestamp": "2/20/2016 23:06",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0505,
            "lon": 131.933,
            "timestamp": "2/20/2016 23:07",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0492,
            "lon": 131.936,
            "timestamp": "2/20/2016 23:08",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0478,
            "lon": 131.939,
            "timestamp": "2/20/2016 23:09",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0453,
            "lon": 131.946,
            "timestamp": "2/20/2016 23:11",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0438,
            "lon": 131.949,
            "timestamp": "2/20/2016 23:12",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0423,
            "lon": 131.952,
            "timestamp": "2/20/2016 23:14",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.041,
            "lon": 131.955,
            "timestamp": "2/20/2016 23:14",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0398,
            "lon": 131.958,
            "timestamp": "2/20/2016 23:16",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0385,
            "lon": 131.962,
            "timestamp": "2/20/2016 23:16",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0372,
            "lon": 131.965,
            "timestamp": "2/20/2016 23:17",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0352,
            "lon": 131.968,
            "timestamp": "2/20/2016 23:18",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0337,
            "lon": 131.971,
            "timestamp": "2/20/2016 23:19",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0318,
            "lon": 131.975,
            "timestamp": "2/20/2016 23:20",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0302,
            "lon": 131.978,
            "timestamp": "2/20/2016 23:21",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0283,
            "lon": 131.981,
            "timestamp": "2/20/2016 23:23",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0265,
            "lon": 131.984,
            "timestamp": "2/20/2016 23:24",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0242,
            "lon": 131.988,
            "timestamp": "2/20/2016 23:26",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0227,
            "lon": 131.991,
            "timestamp": "2/20/2016 23:26",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.021,
            "lon": 131.994,
            "timestamp": "2/20/2016 23:28",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.018,
            "lon": 131.999,
            "timestamp": "2/20/2016 23:29",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.016,
            "lon": 132.003,
            "timestamp": "2/20/2016 23:31",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0128,
            "lon": 132.009,
            "timestamp": "2/20/2016 23:32",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0113,
            "lon": 132.012,
            "timestamp": "2/20/2016 23:33",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0068,
            "lon": 132.02,
            "timestamp": "2/20/2016 23:36",
            "speed": 18.7,
            "heading": 30.5
        }, {
            "lat": 43.0033,
            "lon": 132.027,
            "timestamp": "2/20/2016 23:38",
            "speed": 18.7,
            "heading": 30.5
        }, {"lat": 43.0008, "lon": 132.029, "timestamp": "2/20/2016 23:41", "speed": 18.7, "heading": 30.5}],
        "_class": "ru.danilspirin.mteapibase.application.model.TrajectoryModel"
    },
]

const marine = [
    {
        "id": "66862cb721239b08d48772b2",
        "name": "Порт владивосток",
        "polygon": [{"lat": 43.111578, "lon": 131.8966786, "order": 1}, {
            "lat": 43.1116795,
            "lon": 131.8959122,
            "order": 2
        }, {"lat": 43.1124001, "lon": 131.8952685, "order": 3}, {
            "lat": 43.1120555,
            "lon": 131.8940669,
            "order": 4
        }, {"lat": 43.1114916, "lon": 131.8934661, "order": 5}, {
            "lat": 43.1121495,
            "lon": 131.8911486,
            "order": 6
        }, {"lat": 43.1127134, "lon": 131.8911486, "order": 7}, {
            "lat": 43.1131833,
            "lon": 131.8890458,
            "order": 8
        }, {"lat": 43.1122435, "lon": 131.8894749, "order": 9}, {
            "lat": 43.1125254,
            "lon": 131.8878012,
            "order": 10
        }, {"lat": 43.1138725, "lon": 131.8862992, "order": 11}, {
            "lat": 43.1116169,
            "lon": 131.8844109,
            "order": 12
        }, {"lat": 43.1048494, "lon": 131.8790894, "order": 13}, {
            "lat": 43.0987079,
            "lon": 131.8694764,
            "order": 14
        }, {"lat": 43.0953235, "lon": 131.8741113, "order": 15}, {
            "lat": 43.0896825,
            "lon": 131.8681031,
            "order": 16
        }, {"lat": 43.0866737, "lon": 131.862095, "order": 17}, {
            "lat": 43.0829126,
            "lon": 131.8583184,
            "order": 18
        }, {"lat": 43.079402, "lon": 131.8507653, "order": 19}, {
            "lat": 43.0797781,
            "lon": 131.8451005,
            "order": 20
        }, {"lat": 43.0775212, "lon": 131.8401223, "order": 21}, {
            "lat": 43.0811573,
            "lon": 131.8414956,
            "order": 22
        }, {"lat": 43.0851693, "lon": 131.8464738, "order": 23}, {
            "lat": 43.0890557,
            "lon": 131.8495637,
            "order": 24
        }, {"lat": 43.0906854, "lon": 131.8536835, "order": 25}, {
            "lat": 43.0953235,
            "lon": 131.8535119,
            "order": 26
        }, {"lat": 43.0993346, "lon": 131.859005, "order": 27}, {
            "lat": 43.1019667,
            "lon": 131.8603783,
            "order": 28
        }, {"lat": 43.1043481, "lon": 131.8591767, "order": 29}, {
            "lat": 43.1061027,
            "lon": 131.8631249,
            "order": 30
        }, {"lat": 43.107356, "lon": 131.8694764, "order": 31}, {
            "lat": 43.1094865,
            "lon": 131.8710213,
            "order": 32
        }, {"lat": 43.1112409, "lon": 131.8710213, "order": 33}, {
            "lat": 43.1138725,
            "lon": 131.8684464,
            "order": 34
        }, {"lat": 43.1147497, "lon": 131.8720513, "order": 35}, {
            "lat": 43.1171306,
            "lon": 131.8759995,
            "order": 36
        }, {"lat": 43.1188848, "lon": 131.8761712, "order": 37}, {
            "lat": 43.1195113,
            "lon": 131.8735963,
            "order": 38
        }, {"lat": 43.1210149, "lon": 131.8739396, "order": 39}, {
            "lat": 43.1267784,
            "lon": 131.8751412,
            "order": 40
        }, {"lat": 43.1279059, "lon": 131.8782311, "order": 41}, {
            "lat": 43.1314138,
            "lon": 131.8842393,
            "order": 42
        }, {"lat": 43.1334181, "lon": 131.8837243, "order": 43}, {
            "lat": 43.1376772,
            "lon": 131.8880158,
            "order": 44
        }, {"lat": 43.1413098, "lon": 131.8936806, "order": 45}, {
            "lat": 43.1433138,
            "lon": 131.9005471,
            "order": 46
        }, {"lat": 43.1478227, "lon": 131.9005471, "order": 47}, {
            "lat": 43.1544603,
            "lon": 131.9055253,
            "order": 48
        }, {"lat": 43.1599701, "lon": 131.9058686, "order": 49}, {
            "lat": 43.1707379,
            "lon": 131.8976289,
            "order": 50
        }, {"lat": 43.1805024, "lon": 131.7767793, "order": 51}, {
            "lat": 43.1754951,
            "lon": 131.7630463,
            "order": 52
        }, {"lat": 43.1719898, "lon": 131.7493134, "order": 53}, {
            "lat": 43.1644778,
            "lon": 131.7451936,
            "order": 54
        }, {"lat": 43.1614727, "lon": 131.7300874, "order": 55}, {
            "lat": 43.0210712,
            "lon": 131.7266541,
            "order": 56
        }, {"lat": 43.0627238, "lon": 131.7953187, "order": 57}, {
            "lat": 43.0617204,
            "lon": 131.8069917,
            "order": 58
        }, {"lat": 43.0584595, "lon": 131.8107682, "order": 59}, {
            "lat": 43.0569543,
            "lon": 131.8210679,
            "order": 60
        }, {"lat": 43.0617204, "lon": 131.8234711, "order": 61}, {
            "lat": 43.0664862,
            "lon": 131.8234711,
            "order": 62
        }, {"lat": 43.0693705, "lon": 131.8293076, "order": 63}, {
            "lat": 43.067364,
            "lon": 131.8310242,
            "order": 64
        }, {"lat": 43.0677403, "lon": 131.8351441, "order": 65}, {
            "lat": 43.0683673,
            "lon": 131.8405515,
            "order": 66
        }, {"lat": 43.06611, "lon": 131.8419247, "order": 67}, {
            "lat": 43.0627238,
            "lon": 131.8419247,
            "order": 68
        }, {"lat": 43.0610933, "lon": 131.845358, "order": 69}, {
            "lat": 43.0602154,
            "lon": 131.8512803,
            "order": 70
        }, {"lat": 43.0606544, "lon": 131.8535119, "order": 71}, {
            "lat": 43.061595,
            "lon": 131.8566018,
            "order": 72
        }, {"lat": 43.0617204, "lon": 131.8619233, "order": 73}, {
            "lat": 43.0624102,
            "lon": 131.8658715,
            "order": 74
        }, {"lat": 43.0614696, "lon": 131.8681031, "order": 75}, {
            "lat": 43.0599018,
            "lon": 131.8750554,
            "order": 76
        }, {"lat": 43.0603408, "lon": 131.8803769, "order": 77}, {
            "lat": 43.0617204,
            "lon": 131.8830376,
            "order": 78
        }, {"lat": 43.0623475, "lon": 131.8875008, "order": 79}, {
            "lat": 43.0627865,
            "lon": 131.8920499,
            "order": 80
        }, {"lat": 43.0611561, "lon": 131.893509, "order": 81}, {
            "lat": 43.0604035,
            "lon": 131.8953114,
            "order": 82
        }, {"lat": 43.058773, "lon": 131.8987447, "order": 83}, {
            "lat": 43.059212,
            "lon": 131.9003754,
            "order": 84
        }, {"lat": 43.0610306, "lon": 131.9027787, "order": 85}, {
            "lat": 43.0597764,
            "lon": 131.9038945,
            "order": 86
        }, {"lat": 43.0584595, "lon": 131.9024354, "order": 87}, {
            "lat": 43.0572052,
            "lon": 131.9027787,
            "order": 88
        }, {"lat": 43.0541321, "lon": 131.8998605, "order": 89}, {
            "lat": 43.051937,
            "lon": 131.8986588,
            "order": 90
        }, {"lat": 43.0488637, "lon": 131.8992596, "order": 91}, {
            "lat": 43.0469819,
            "lon": 131.8982297,
            "order": 92
        }, {"lat": 43.044912, "lon": 131.8968564, "order": 93}, {
            "lat": 43.044222,
            "lon": 131.8942815,
            "order": 94
        }, {"lat": 43.0437829, "lon": 131.8926507, "order": 95}, {
            "lat": 43.0396427,
            "lon": 131.8918782,
            "order": 96
        }, {"lat": 43.0373843, "lon": 131.8923932, "order": 97}, {
            "lat": 43.0368825,
            "lon": 131.8944531,
            "order": 98
        }, {"lat": 43.0336202, "lon": 131.8938523, "order": 99}, {
            "lat": 43.0307969,
            "lon": 131.8950539,
            "order": 100
        }, {"lat": 43.0292283, "lon": 131.9000321, "order": 101}, {
            "lat": 43.0298557,
            "lon": 131.9020062,
            "order": 102
        }, {"lat": 43.0316125, "lon": 131.903637, "order": 103}, {
            "lat": 43.0316752,
            "lon": 131.9054395,
            "order": 104
        }, {"lat": 43.0309224, "lon": 131.9079285, "order": 105}, {
            "lat": 43.031349,
            "lon": 131.9132577,
            "order": 106
        }, {"lat": 43.0304706, "lon": 131.9166051, "order": 107}, {
            "lat": 43.0297805,
            "lon": 131.9142019,
            "order": 108
        }, {"lat": 43.0268315, "lon": 131.9122278, "order": 109}, {
            "lat": 43.0261413,
            "lon": 131.9088804,
            "order": 110
        }, {"lat": 43.0249491, "lon": 131.9069063, "order": 111}, {
            "lat": 43.0231922,
            "lon": 131.9068204,
            "order": 112
        }, {"lat": 43.0219372, "lon": 131.9087087, "order": 113}, {
            "lat": 43.0221882,
            "lon": 131.9105111,
            "order": 114
        }, {"lat": 43.0209332, "lon": 131.9105111, "order": 115}, {
            "lat": 43.0187369,
            "lon": 131.9109403,
            "order": 116
        }, {"lat": 43.0180466, "lon": 131.9124852, "order": 117}, {
            "lat": 43.0155991,
            "lon": 131.9133436,
            "order": 118
        }, {"lat": 43.0132771, "lon": 131.9125711, "order": 119}, {
            "lat": 43.0113315,
            "lon": 131.9117128,
            "order": 120
        }, {"lat": 43.0095114, "lon": 131.9110261, "order": 121}, {
            "lat": 43.0085072,
            "lon": 131.9131719,
            "order": 122
        }, {"lat": 43.0076285, "lon": 131.9202958, "order": 123}, {
            "lat": 43.00857,
            "lon": 131.9218408,
            "order": 124
        }, {"lat": 43.0092604, "lon": 131.9250165, "order": 125}, {
            "lat": 43.0118964,
            "lon": 131.924759,
            "order": 126
        }, {"lat": 43.0132143, "lon": 131.9274198, "order": 127}, {
            "lat": 43.0141557,
            "lon": 131.9265615,
            "order": 128
        }, {"lat": 43.0160384, "lon": 131.927334, "order": 129}, {
            "lat": 43.0160384,
            "lon": 131.9287931,
            "order": 130
        }, {"lat": 43.0164149, "lon": 131.9309388, "order": 131}, {
            "lat": 43.0176073,
            "lon": 131.9335138,
            "order": 132
        }, {"lat": 43.0190506, "lon": 131.9335996, "order": 133}, {
            "lat": 43.0216235,
            "lon": 131.9325696,
            "order": 134
        }, {"lat": 43.022251, "lon": 131.9299947, "order": 135}, {
            "lat": 43.0214352,
            "lon": 131.9281923,
            "order": 136
        }, {"lat": 43.0195527, "lon": 131.9270765, "order": 137}, {
            "lat": 43.0212469,
            "lon": 131.926304,
            "order": 138
        }, {"lat": 43.0245099, "lon": 131.9281923, "order": 139}, {
            "lat": 43.0255139,
            "lon": 131.9312822,
            "order": 140
        }, {"lat": 43.0212469, "lon": 131.9372045, "order": 141}, {
            "lat": 43.0186741,
            "lon": 131.9387494,
            "order": 142
        }, {"lat": 43.0038625, "lon": 131.9269048, "order": 143}, {
            "lat": 43.0021049,
            "lon": 131.9289647,
            "order": 144
        }, {"lat": 43.0005984, "lon": 131.9262182, "order": 145}, {
            "lat": 42.9985897,
            "lon": 131.9265615,
            "order": 146
        }, {"lat": 42.9978364, "lon": 131.930338, "order": 147}, {
            "lat": 42.9999707,
            "lon": 131.9348012,
            "order": 148
        }, {"lat": 42.9959531, "lon": 131.9354879, "order": 149}, {
            "lat": 42.9882939,
            "lon": 131.9265615,
            "order": 150
        }, {"lat": 42.9773684, "lon": 131.9179784, "order": 151}, {
            "lat": 42.9717165,
            "lon": 131.9076787,
            "order": 152
        }, {"lat": 42.9673203, "lon": 131.9069921, "order": 153}, {
            "lat": 42.8697682,
            "lon": 131.9310247,
            "order": 154
        }, {"lat": 42.9653105, "lon": 132.2036229, "order": 155}, {
            "lat": 43.1324034,
            "lon": 132.0518743,
            "order": 156
        }, {"lat": 43.0895011, "lon": 132.0113901, "order": 157}, {
            "lat": 43.0920083,
            "lon": 131.9907907,
            "order": 158
        }, {"lat": 43.0857401, "lon": 131.972938, "order": 159}, {
            "lat": 43.0753457,
            "lon": 131.9626162,
            "order": 160
        }, {"lat": 43.0714584, "lon": 131.9633886, "order": 161}, {
            "lat": 43.0700163,
            "lon": 131.9651911,
            "order": 162
        }, {"lat": 43.0633697, "lon": 131.9645044, "order": 163}, {
            "lat": 43.0572867,
            "lon": 131.9623587,
            "order": 164
        }, {"lat": 43.0582901, "lon": 131.96115700000001, "order": 165}, {
            "lat": 43.0580889,
            "lon": 131.9563831,
            "order": 166
        }, {"lat": 43.0604719, "lon": 131.9568122, "order": 167}, {
            "lat": 43.0649869,
            "lon": 131.958958,
            "order": 168
        }, {"lat": 43.0679967, "lon": 131.96084630000001, "order": 169}, {
            "lat": 43.0691881,
            "lon": 131.9623054,
            "order": 170
        }, {"lat": 43.0725112, "lon": 131.961018, "order": 171}, {
            "lat": 43.0735144,
            "lon": 131.9574131,
            "order": 172
        }, {"lat": 43.0743921, "lon": 131.9515766, "order": 173}, {
            "lat": 43.0729501,
            "lon": 131.9491733,
            "order": 174
        }, {"lat": 43.0711945, "lon": 131.9445385, "order": 175}, {
            "lat": 43.0719469,
            "lon": 131.9417919,
            "order": 176
        }, {"lat": 43.0709437, "lon": 131.9395603, "order": 177}, {
            "lat": 43.0678713,
            "lon": 131.9343246,
            "order": 178
        }, {"lat": 43.0658021, "lon": 131.9332946, "order": 179}, {
            "lat": 43.0658648,
            "lon": 131.9294323,
            "order": 180
        }, {"lat": 43.0646734, "lon": 131.926514, "order": 181}, {
            "lat": 43.0658648,
            "lon": 131.9228233,
            "order": 182
        }, {"lat": 43.0664918, "lon": 131.9186176, "order": 183}, {
            "lat": 43.0671189,
            "lon": 131.9150127,
            "order": 184
        }, {"lat": 43.0682475, "lon": 131.9140686, "order": 185}, {
            "lat": 43.0710691,
            "lon": 131.9136394,
            "order": 186
        }, {"lat": 43.0734517, "lon": 131.9176735, "order": 187}, {
            "lat": 43.0726366,
            "lon": 131.9294323,
            "order": 188
        }, {"lat": 43.0728874, "lon": 131.932608, "order": 189}, {
            "lat": 43.0745175,
            "lon": 131.9327797,
            "order": 190
        }, {"lat": 43.0761476, "lon": 131.9297756, "order": 191}, {
            "lat": 43.0774015,
            "lon": 131.9265998,
            "order": 192
        }, {"lat": 43.0789061, "lon": 131.9250549, "order": 193}, {
            "lat": 43.0804734,
            "lon": 131.9250549,
            "order": 194
        }, {"lat": 43.0807241, "lon": 131.9236816, "order": 195}, {
            "lat": 43.0833571,
            "lon": 131.9238533,
            "order": 196
        }, {"lat": 43.0832944, "lon": 131.9211925, "order": 197}, {
            "lat": 43.0794076,
            "lon": 131.9173301,
            "order": 198
        }, {"lat": 43.0777776, "lon": 131.9143261, "order": 199}, {
            "lat": 43.0774642,
            "lon": 131.9076313,
            "order": 200
        }, {"lat": 43.0788434, "lon": 131.9054855, "order": 201}, {
            "lat": 43.0789688,
            "lon": 131.9042839,
            "order": 202
        }, {"lat": 43.0768999, "lon": 131.8994773, "order": 203}, {
            "lat": 43.0778898,
            "lon": 131.8989102,
            "order": 204
        }, {"lat": 43.0815886, "lon": 131.8946187, "order": 205}, {
            "lat": 43.0820901,
            "lon": 131.8894688,
            "order": 206
        }, {"lat": 43.083532, "lon": 131.8881814, "order": 207}, {
            "lat": 43.088484,
            "lon": 131.8912713,
            "order": 208
        }, {"lat": 43.0901138, "lon": 131.8977944, "order": 209}, {
            "lat": 43.0923702,
            "lon": 131.8994252,
            "order": 210
        }, {"lat": 43.092809, "lon": 131.8976227, "order": 211}, {
            "lat": 43.0901764,
            "lon": 131.8896405,
            "order": 212
        }, {"lat": 43.0854752, "lon": 131.8820016, "order": 213}, {
            "lat": 43.0859767,
            "lon": 131.8795983,
            "order": 214
        }, {"lat": 43.0886094, "lon": 131.878225, "order": 215}, {
            "lat": 43.0926836,
            "lon": 131.8796841,
            "order": 216
        }, {"lat": 43.0966322, "lon": 131.8825165, "order": 217}, {
            "lat": 43.098575,
            "lon": 131.8817441,
            "order": 218
        }, {"lat": 43.1013325, "lon": 131.8829457, "order": 219}, {
            "lat": 43.1062205,
            "lon": 131.8922154,
            "order": 220
        }, {"lat": 43.1068158, "lon": 131.8968503, "order": 221}, {
            "lat": 43.1058132,
            "lon": 131.9045321,
            "order": 222
        }, {"lat": 43.1044346, "lon": 131.9126431, "order": 223}, {
            "lat": 43.1047479,
            "lon": 131.9129864,
            "order": 224
        }, {"lat": 43.1046852, "lon": 131.9180075, "order": 225}, {
            "lat": 43.1052805,
            "lon": 131.9184367,
            "order": 226
        }, {"lat": 43.1052805, "lon": 131.9197671, "order": 227}, {
            "lat": 43.1046539,
            "lon": 131.9199816,
            "order": 228
        }, {"lat": 43.1046539, "lon": 131.9231574, "order": 229}, {
            "lat": 43.1057505,
            "lon": 131.9230715,
            "order": 230
        }, {"lat": 43.1057819, "lon": 131.9237582, "order": 231}, {
            "lat": 43.1045912,
            "lon": 131.9237153,
            "order": 232
        }, {"lat": 43.1045912, "lon": 131.9285647, "order": 233}, {
            "lat": 43.1054372,
            "lon": 131.9296376,
            "order": 234
        }, {"lat": 43.1058445, "lon": 131.9322125, "order": 235}, {
            "lat": 43.1069725,
            "lon": 131.9331996,
            "order": 236
        }, {"lat": 43.1071605, "lon": 131.9319979, "order": 237}, {
            "lat": 43.1078184,
            "lon": 131.93247,
            "order": 238
        }, {"lat": 43.1081944, "lon": 131.9314829, "order": 239}, {
            "lat": 43.1082257,
            "lon": 131.9295088,
            "order": 240
        }, {"lat": 43.1086017, "lon": 131.9269768, "order": 241}, {
            "lat": 43.1080691,
            "lon": 131.9268481,
            "order": 242
        }, {"lat": 43.1082884, "lon": 131.923329, "order": 243}, {
            "lat": 43.108821,
            "lon": 131.9212691,
            "order": 244
        }, {"lat": 43.108539, "lon": 131.9198529, "order": 245}, {
            "lat": 43.1072231,
            "lon": 131.9195096,
            "order": 246
        }, {"lat": 43.1073171, "lon": 131.9188229, "order": 247}, {
            "lat": 43.1086957,
            "lon": 131.9191662,
            "order": 248
        }, {"lat": 43.1103249, "lon": 131.9129006, "order": 249}, {
            "lat": 43.1107635,
            "lon": 131.9097249,
            "order": 250
        }, {"lat": 43.1112648, "lon": 131.9085662, "order": 251}, {
            "lat": 43.1119853,
            "lon": 131.9062916,
            "order": 252
        }, {"lat": 43.1130818, "lon": 131.9016997, "order": 253}, {
            "lat": 43.1125806,
            "lon": 131.8982665,
            "order": 254
        }, {"lat": 43.1119227, "lon": 131.8983094, "order": 255}, {
            "lat": 43.111578,
            "lon": 131.8966786,
            "order": 256
        }, {"lat": 43.1116795, "lon": 131.8959122, "order": 257}, {"lat": 43.111578, "lon": 131.8966786, "order": 258}],
        "_class": "ru.danilspirin.mteapibase.application.model.MarineZone"
    }
]