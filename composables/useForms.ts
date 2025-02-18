export function useForm(initialState: { [key: string]: any }) {
    const formState = ref({ ...initialState });

    function reset(){
        Object.keys(initialState).forEach((key) => {
              formState.value[key] = initialState[key];
        })
    }
    
    return {
        formState,
        reset
    }
}