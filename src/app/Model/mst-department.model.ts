import { Embedded } from './embedded.model';

export class MstDepartment {
    constructor(
        public id: number,
        public departmentName: String,
        public embeddDTO: Embedded
    ) {

    }
}
