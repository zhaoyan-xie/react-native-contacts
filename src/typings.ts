
export interface IContact extends IPerson {
	id: string;
	email?: string;
	phone?: string;
}

export interface IPerson {
	firstName: string;
	lastName: string;
}
