const getConfig = () => ({
    headers: {Authorization: `Bearer ${localStorage.getItem("clonstagram-token")}`}
})

export default getConfig;