import {
    StyledInputText,
    StyledInputTitle,
    StyledInputSelect,
    StyledInputCheckbox,
    StyledInputLabel,
    StyledInputSubmit
} from './style'
export const InputText = ({placeholder, name, register}) => {
    return (
        <>
            {name && (
                <StyledInputTitle>{name}</StyledInputTitle>
            )}
            <StyledInputText type="text" placeholder={placeholder} register={register} />
        </>
    )
};

export const InputSelect = ({children, name, register}) => {
    return (
        <>
            {name && (
                <StyledInputTitle>{name}</StyledInputTitle>
            )}
            <StyledInputSelect type="select" register={register} >
                {children}
            </StyledInputSelect>
        </>
    )
};
export const InputCheckbox = ({value, id, register, children}) => {
    return (
        <>
            <StyledInputCheckbox register={register} type="checkbox" value={value} id={id} />
            <StyledInputLabel htmlFor={id}>
                {children}
            </StyledInputLabel>
        </>
    )
};

export const InputSubmit = ({value}) => {
    return (
        <>
            <StyledInputSubmit type="submit" value={value}/>
        </>
    )
}