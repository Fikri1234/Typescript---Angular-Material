import { Embedded } from './embedded.model';

export class MstUserRole {
    constructor(
        public roleCode: String,
        public roleName: String,
        public description: String,
        public embeddDTO: Embedded
    ) {

    }
}
