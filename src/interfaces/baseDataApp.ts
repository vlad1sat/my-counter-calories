import IDataPerson from "@/interfaces/IDataPerson";

export const EMPTY_PERSON: IDataPerson = {
    age: 0,
    weight: 0,
    height: 0
};

export const BaseStateApp: TBaseState = {
    gender: 'male',
    action: 'min'
};

export type TBaseState = {
    gender: string,
    action: string
};