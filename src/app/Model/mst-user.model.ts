import { Embedded } from './index';

export class MstUser {
    constructor(
        public userId: String,
        public password: String,
        public name: String,
        public roleCode: String,
        public roleName: String,
        public birthDate: Date,
        public email: String,
        public nik: String,
        public type: String,
        public posisi_skrg: String,
        public posisi_dulu: String,
        public totalElements: number,
        public totalPages: number,
        public embeddDTO: Embedded
    ) {

    }
}
