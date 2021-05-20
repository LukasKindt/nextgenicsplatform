import { environment } from '../Environments/Environment';

export const checkDomainName = async (domName) => {

  var value;

    console.log(environment.apiUrl + '/api/Domain/checkdomainname?domName=' + domName)
    await fetch(environment.apiUrl + '/api/Domain/checkdomainname?domName=' + domName)
    .then(res => res.json())
    .then((data) => {
      value = data
    })
    .catch(console.log)

    return value;
}

export const getDomainById = async (domId) => {

  var value

  await fetch(environment.apiUrl + '/api/Domain/' + domId)
  .then(res => res.json())
  .then((data) => {
    value = data
  })
  .catch(console.log)

  return value
}

export const getDomainByName = async (domName) => {

  var value;

  await fetch(environment.apiUrl + '/api/Domain/' + domName)
  .then(res => res.json())
  .then((data) => {
    value = data
  })
  .catch(console.log)

  return value
}

export const getClientsByDomainId = async (domId) => {

  var value

  await fetch(environment.apiUrl + '/api/Domain/' + domId + '/clients')
  .then(res => res.json())
  .then((data) => {
    value = data
  })
  .catch(console.log)

  return value
}

export const getClientByDomainIdAndClientId = async (domId, clientId) => {

  var value

  await fetch(environment.apiUrl + '/api/Domain/' + domId + '/clients/' + clientId + '/client')
  .then(res => res.json())
  .then((data) => {
    value = data
  })
  .catch(console.log)

  return value
}

export const postDomain = async (domainName, clients) => {

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
        domainName: domainName,
        clients: clients
    })
  };

  var value

  await fetch(environment.apiUrl + '/api/Domain', requestOptions)
  .then(res => res.json())
  .then((data) => {
    value = data
  })
  .catch(console.log)

  return value
}