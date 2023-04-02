import { IAlert } from "../utils/alert";

function getRandomCategory(): "WEATHER" | "SECURITY" | "HEALTH" | "FIRE" {
    const categories: Array<"WEATHER" | "SECURITY" | "HEALTH" | "FIRE"> = ["WEATHER", "SECURITY", "HEALTH", "FIRE"];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

function getRandomNumber(): number {
    const min = 0;
    const max = 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generateRandomTitle(): string {
    const adjectives = ['Amazing', 'Incredible', 'Extraordinary', 'Fantastic', 'Impressive'];
    const nouns = ['Event', 'Incident', 'Situation', 'Occurrence', 'Phenomenon'];

    return `${getRandomElement(adjectives)} ${getRandomElement(nouns)}`;
}

function generateRandomDescription(): string {
    const phrases = [
        'happened today.',
        'was reported in the news.',
        'caught everyone\'s attention.',
        'has been the talk of the town.',
        'has generated significant interest.',
    ];

    return `${getRandomElement(phrases)}`;
}

export const alertData : IAlert[] = [
    { id: "222176b6-d007-11ed-afa1-0242ac120002", lat: 37.7749, lng: -122.4194, severity: getRandomNumber(), type: getRandomCategory(), department: "San Francisco", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "22217b20-d007-11ed-afa1-0242ac120002", lat: 37.3382, lng: -121.8863, severity: getRandomNumber(), type: getRandomCategory(), department: "Santa Clara", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "22217c60-d007-11ed-afa1-0242ac120002", lat: 34.0522, lng: -118.2437, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "22217d8c-d007-11ed-afa1-0242ac120002", lat: 32.7157, lng: -117.1611, severity: getRandomNumber(), type: getRandomCategory(), department: "San Diego", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221805c-d007-11ed-afa1-0242ac120002", lat: 36.7783, lng: -119.4179, severity: getRandomNumber(), type: getRandomCategory(), department: "Fresno", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "22218192-d007-11ed-afa1-0242ac120002", lat: 38.5816, lng: -121.4944, severity: getRandomNumber(), type: getRandomCategory(), department: "Sacramento", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "222182c8-d007-11ed-afa1-0242ac120002", lat: 34.1982, lng: -118.5493, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "222183e0-d007-11ed-afa1-0242ac120002", lat: 33.7456, lng: -117.8677, severity: getRandomNumber(), type: getRandomCategory(), department: "Orange", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "222184f8-d007-11ed-afa1-0242ac120002", lat: 37.8044, lng: -122.2712, severity: getRandomNumber(), type: getRandomCategory(), department: "San Francisco", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "222189f8-d007-11ed-afa1-0242ac120002", lat: 33.7701, lng: -118.1937, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "22218b9c-d007-11ed-afa1-0242ac120002", lat: 34.0633, lng: -117.6509, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "22218cc8-d007-11ed-afa1-0242ac120002", lat: 33.8359, lng: -118.3406, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "22218f2a-d007-11ed-afa1-0242ac120002", lat: 33.6695, lng: -117.8231, severity: getRandomNumber(), type: getRandomCategory(), department: "Orange", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "22219088-d007-11ed-afa1-0242ac120002", lat: 34.1425, lng: -118.2551, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "22219326-d007-11ed-afa1-0242ac120002", lat: 33.9792, lng: -118.0328, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "22219470-d007-11ed-afa1-0242ac120002", lat: 34.0551, lng: -117.7495, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221959c-d007-11ed-afa1-0242ac120002", lat: 33.8883, lng: -118.3088, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "222196c8-d007-11ed-afa1-0242ac120002", lat: 33.9164, lng: -118.3526, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "222197d6-d007-11ed-afa1-0242ac120002", lat: 33.9617, lng: -118.3531, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "22219a42-d007-11ed-afa1-0242ac120002", lat: 34.3917, lng: -118.5426, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "22219c04-d007-11ed-afa1-0242ac120002", lat: 37.9577, lng: -121.2908, severity: getRandomNumber(), type: getRandomCategory(), department: "San Joaquin", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "22219d58-d007-11ed-afa1-0242ac120002", lat: 37.6486, lng: -122.6655, severity: getRandomNumber(), type: getRandomCategory(), department: "San Mateo", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "22219e7a-d007-11ed-afa1-0242ac120002", lat: 33.6189, lng: -117.9298, severity: getRandomNumber(), type: getRandomCategory(), department: "Orange", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221a0aa-d007-11ed-afa1-0242ac120002", lat: 37.7974, lng: -121.2161, severity: getRandomNumber(), type: getRandomCategory(), department: "San Joaquin", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221a1c2-d007-11ed-afa1-0242ac120002", lat: 38.0049, lng: -121.8058, severity: getRandomNumber(), type: getRandomCategory(), department: "Stanislaus", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221a2d0-d007-11ed-afa1-0242ac120002", lat: 34.4208, lng: -119.6982, severity: getRandomNumber(), type: getRandomCategory(), department: "Santa Barbara", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221a708-d007-11ed-afa1-0242ac120002", lat: 34.2164, lng: -119.0376, severity: getRandomNumber(), type: getRandomCategory(), department: "Ventura", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221a85c-d007-11ed-afa1-0242ac120002", lat: 36.3274, lng: -119.6457, severity: getRandomNumber(), type: getRandomCategory(), department: "Kings", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221a988-d007-11ed-afa1-0242ac120002", lat: 33.5968, lng: -117.6582, severity: getRandomNumber(), type: getRandomCategory(), department: "Orange", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221aaa0-d007-11ed-afa1-0242ac120002", lat: 32.6400, lng: -117.0842, severity: getRandomNumber(), type: getRandomCategory(), department: "San Diego", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221ae38-d007-11ed-afa1-0242ac120002", lat: 33.4255, lng: -117.6160, severity: getRandomNumber(), type: getRandomCategory(), department: "Orange", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221af6e-d007-11ed-afa1-0242ac120002", lat: 33.1959, lng: -117.3795, severity: getRandomNumber(), type: getRandomCategory(), department: "San Diego", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221b090-d007-11ed-afa1-0242ac120002", lat: 36.6002, lng: -121.8947, severity: getRandomNumber(), type: getRandomCategory(), department: "Monterey", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221b19e-d007-11ed-afa1-0242ac120002", lat: 34.5362, lng: -117.2928, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221b2ac-d007-11ed-afa1-0242ac120002", lat: 33.7175, lng: -116.3409, severity: getRandomNumber(), type: getRandomCategory(), department: "Riverside", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221b61c-d007-11ed-afa1-0242ac120002", lat: 38.2969, lng: -122.2869, severity: getRandomNumber(), type: getRandomCategory(), department: "Sonoma", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221b77a-d007-11ed-afa1-0242ac120002", lat: 33.6011, lng: -117.6720, severity: getRandomNumber(), type: getRandomCategory(), department: "Orange", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221b8a6-d007-11ed-afa1-0242ac120002", lat: 36.7468, lng: -119.7724, severity: getRandomNumber(), type: getRandomCategory(), department: "Fresno", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221b9be-d007-11ed-afa1-0242ac120002", lat: 38.4404, lng: -122.7141, severity: getRandomNumber(), type: getRandomCategory(), department: "Sonoma", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221bae0-d007-11ed-afa1-0242ac120002", lat: 34.1083, lng: -117.8090, severity: getRandomNumber(), type: getRandomCategory(), department: "San Bernardino", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221bdb0-d007-11ed-afa1-0242ac120002", lat: 33.7414, lng: -116.3540, severity: getRandomNumber(), type: getRandomCategory(), department: "Riverside", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221bf40-d007-11ed-afa1-0242ac120002", lat: 33.7206, lng: -116.2148, severity: getRandomNumber(), type: getRandomCategory(), department: "Riverside", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221c0da-d007-11ed-afa1-0242ac120002", lat: 34.2819, lng: -118.4380, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221c24c-d007-11ed-afa1-0242ac120002", lat: 34.0195, lng: -118.4912, severity: getRandomNumber(), type: getRandomCategory(), department: "Los Angeles", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221c3f0-d007-11ed-afa1-0242ac120002", lat: 33.6839, lng: -117.7947, severity: getRandomNumber(), type: getRandomCategory(), department: "Orange", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221c666-d007-11ed-afa1-0242ac120002", lat: 38.1041, lng: -122.2566, severity: getRandomNumber(), type: getRandomCategory(), department: "Marin", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221c7e2-d007-11ed-afa1-0242ac120002", lat: 36.9102, lng: -121.7569, severity: getRandomNumber(), type: getRandomCategory(), department: "Monterey", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221c90e-d007-11ed-afa1-0242ac120002", lat: 40.5865, lng: -122.3917, severity: getRandomNumber(), type: getRandomCategory(), department: "Shasta", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221ca30-d007-11ed-afa1-0242ac120002", lat: 39.1404, lng: -121.6169, severity: getRandomNumber(), type: getRandomCategory(), department: "Yuba", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221cca6-d007-11ed-afa1-0242ac120002", lat: 39.7285, lng: -121.8375, severity: getRandomNumber(), type: getRandomCategory(), department: "Butte", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221ce04-d007-11ed-afa1-0242ac120002", lat: 40.1785, lng: -122.2358, severity: getRandomNumber(), type: getRandomCategory(), department: "Tehama", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221cf26-d007-11ed-afa1-0242ac120002", lat: 41.2082, lng: -122.2711, severity: getRandomNumber(), type: getRandomCategory(), department: "Siskiyou", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221d28c-d007-11ed-afa1-0242ac120002", lat: 41.7354, lng: -121.8342, severity: getRandomNumber(), type: getRandomCategory(), department: "Modoc", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221d3cc-d007-11ed-afa1-0242ac120002", lat: 40.4520, lng: -120.6519, severity: getRandomNumber(), type: getRandomCategory(), department: "Lassen", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221d516-d007-11ed-afa1-0242ac120002", lat: 39.7596, lng: -121.6219, severity: getRandomNumber(), type: getRandomCategory(), department: "Butte", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221d642-d007-11ed-afa1-0242ac120002", lat: 38.9260, lng: -120.0045, severity: getRandomNumber(), type: getRandomCategory(), department: "El Dorado", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221d750-d007-11ed-afa1-0242ac120002", lat: 38.4016, lng: -122.3608, severity: getRandomNumber(), type: getRandomCategory(), department: "Napa", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221da98-d007-11ed-afa1-0242ac120002", lat: 39.3277, lng: -120.3867, severity: getRandomNumber(), type: getRandomCategory(), department: "Nevada", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221dbd8-d007-11ed-afa1-0242ac120002", lat: 38.1074, lng: -122.5697, severity: getRandomNumber(), type: getRandomCategory(), department: "Marin", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
    { id: "2221dd04-d007-11ed-afa1-0242ac120002", lat: 38.2494, lng: -122.0408, severity: getRandomNumber(), type: getRandomCategory(), department: "Sonoma", created_at: "2023-03-31T15:32:45.123Z", title: generateRandomTitle(), description: generateRandomDescription() },
];