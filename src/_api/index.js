import axios from "axios";

const url = 'https://fakhirul.fajarseptianto.my.id'
// const url = 'https://api-fakhirul.karyakreasi.id'
// const url = 'http://127.0.0.1:8000'

export const API = axios.create({
  baseURL: `${url}/api`
})

export const userStorage = `${url}/storage/users/`
export const plantStorage = `${url}/storage/plants/`
export const campaignStorage = `${url}/storage/campaigns/`