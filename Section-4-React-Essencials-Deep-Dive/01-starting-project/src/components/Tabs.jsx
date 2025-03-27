export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
    // If we pass the prop starting with a lowercase letter, we need to use a constant.
    // const ButtonsContainer = buttonsContainer
    
    return  (
        <>
            <ButtonsContainer>{ buttons }</ButtonsContainer>
            { children }
        </>
    )
}