import { ErrorEnum } from "../models/enums/error.enum";

export class ErrorService {

    static error(res: any, errors: any, statusCode = 500, message = null): any {
        console.log(errors);

        res.status(statusCode)
            .send({
                status: statusCode,
                message: message ?? ErrorEnum.invalidData,
                errors: errors,
            });
    }
}