import axios from 'axios'

export class TasksApi {
  constructor ({ client, apiUrl } = {}) {
    this.client = client || axios
    this.apiUrl = apiUrl || process.env.API_URL
  }

  addTask (task) {
    return this.client.post(`${this.apiUrl}/tasks`, task)
  }

  updateTask (id, task) {
    return this.client.put(`${this.apiUrl}/tasks/${id}`, task)
  }

  getTasks () {
    return this.client.get(`${this.apiUrl}/tasks`)
  }
}
