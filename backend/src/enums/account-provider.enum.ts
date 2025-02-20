export const ProviderEnum = {
    GOOGLE: "GOOGLE",
    FACEBOOK: "FACEBOOK",
    EMAIL: "EMAIL",
    GITHUB: "GITHUB",
};

export type ProviderEnumType = keyof typeof ProviderEnum;