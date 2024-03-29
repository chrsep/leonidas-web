// IMPORTANT! This file is autogenerated by the `type-safe-next-routes`
// package. You should _not_ update these types manually...

declare module "next-type-safe-routes" {
  type Query = { [key: string]: any }
  export type TypeSafePage =
    | "/app/auth/login"
    | { route: "/app/auth/login"; query?: Query }
    | "/app/auth/sign-up"
    | { route: "/app/auth/sign-up"; query?: Query }
    | "/app/auth/verify-request"
    | { route: "/app/auth/verify-request"; query?: Query }
    | "/app/home"
    | { route: "/app/home"; query?: Query }
    | "/app/logs"
    | { route: "/app/logs"; query?: Query }
    | "/app/settings"
    | { route: "/app/settings"; query?: Query }
    | "/app/settings/account"
    | { route: "/app/settings/account"; query?: Query }
    | "/app/settings/exercises"
    | { route: "/app/settings/exercises"; query?: Query }
    | "/app/tracker"
    | { route: "/app/tracker"; query?: Query }
    | "/"
    | { route: "/"; query?: Query }
  export type TypeSafeApiRoute = {
    route: "/api/auth"
    path: string
    query?: Query
  }
  export const getPathname: (
    typeSafeUrl: TypeSafePage | TypeSafeApiRoute
  ) => string
  export const getRoute: (
    typeSafeUrl: TypeSafePage | TypeSafeApiRoute
  ) => string
}
