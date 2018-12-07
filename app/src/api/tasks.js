import axios from 'axios'

export default class TasksApi {
  constructor({ client, apiUrl } = {}) {
    this.client = client || axios
    this.apiUrl = apiUrl || process.env.API_URL
  }

  addTask(task) {
    return this.client.post(`${this.apiUrl}/tasks`, task).then(res => res.data)
  }

  updateTask(task) {
    return this.client
      .put(`${this.apiUrl}/tasks/${task.id}`, task)
      .then(res => res.data)
  }

  getTasks() {
    return this.client.get(`${this.apiUrl}/tasks`).then(res => res.data)
  }
}
