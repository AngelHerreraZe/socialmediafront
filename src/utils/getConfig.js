const getConfig = () => ({
    headers: {"clonstagram-token": `${localStorage.getItem("clonstagram-token")}`}
})

export default getConfig;