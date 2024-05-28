export default class Util {
    static objectDeepCopy(object) {
        return JSON.parse(JSON.stringify(object));
    }
}