import { ErrorEnum } from "../models/enums/error.enum";

export const errorHandler = (err: { error: { details: any; }; }, req: any, res: { status: (arg0: any) => { (): any; new(): any; json: { (arg0: { status: any; message: ErrorEnum; errors: any; }): void; new(): any; }; }; }, next: () => void) => {

    if (err.error && err.error.details) {
        let errors = {};
        for (const item of err.error.details) {
            // @ts-ignore
            errors[`${item.context.key}`] = item.message;
        }
        console.log('Error: =========== > ', errors);
        res.status(422).json({ status: 422, message: ErrorEnum.invalidData, errors: err.error.details })

    } else {
        console.log('Error: =========== > ', err);
        next();
    }

};