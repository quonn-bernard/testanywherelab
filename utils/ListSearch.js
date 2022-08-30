const handleChange = (e, defaultLIst) => {
    let newSvcList;
    if (e.target.value) {
      
       newSvcList = defaultLIst.filter((svc) => {
          return svc.name.toLowerCase().includes(e.target.value.toLowerCase());
        })
      
    } else {
        newSvcList = defaultLIst;
    }

    return newSvcList
  };

  export default handleChange;