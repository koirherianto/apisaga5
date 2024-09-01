import type { HttpContext } from '@adonisjs/core/http'

export default class LandingController {
  async index({ inertia }: HttpContext) {
    return inertia.render('home', { version: 6 })
  }
}
