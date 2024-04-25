export interface IShelter {
    shelterName: string
    shelterEmail: string
    shelterPhone: string
    shelterWhatsApp: string
}

export interface IupdateShelterRequest {
    name: string
    email: string
    phone: string
    whatsApp: string 
}

export interface IupdateShelterResponse extends IupdateShelterRequest {}