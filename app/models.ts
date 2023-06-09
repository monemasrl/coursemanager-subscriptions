
type speaker = {
    speaker_name: string;
    speaker_bio: string;
    speaker_email: string;
    speaker_phone: string;
    speaker_website: string;
    speaker_twitter: string;
    speaker_facebook: string;
    speaker_linkedin: string;
    speaker_instagram: string;
    speaker_image: string;
}
export type organization = {
    location_name?: string;
    location_email?: string;
    location_phone?: string;
    location_mobile?: string;
    location_fax?: string;
};
export interface IEventResponse {
    event_code: string;
    event_title: string;
    event_description: string;
    event_registration_url: string;
    event_areas: string[];
    event_speakers: speaker[];
    event_notes: string;
    event_organization: organization;
    event_partner_categories: string[];
    event_partner_titles: string[];
}

export interface IRegistrationRequest {
    event_code: string;
    firstname: string;
    lastname: string;
    email: string;
    street: string;
    zip: string;
    city: string;
    state_id: string;
    country_id: string;
    phone: string;
    mobile: string;
    fax?: string;
    pec?: string;
    customer_id?: string;
    fiscalcode: string;
    title?: string;
    note?: string;
    qualification?: string;
}

export interface IRegistrationResponse {
    registration_id: string;
    event_code: string;
    title: string;
    firstname: string;
    lastname: string;
    email: string;
    created_at: Date;
}