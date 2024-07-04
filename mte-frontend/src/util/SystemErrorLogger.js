export default class SystemErrorLogger {
    static methodNotImplemented(context, methodName) {
        console.log(`${context}: Метод ${methodName} не проинициализирован`)
    }

    static UnknownException(context, methodName, comment) {
        console.log(`${context} : Произошла неизвестная ошибка в методе ${methodName} ${comment}.`)
    }
}