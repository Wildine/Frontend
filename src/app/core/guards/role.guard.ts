import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const userRole = decodedToken.role;

    // if (route.data['role'] && route.data['role'] === decodedToken.role) {
    //   return true;
    // }

    if (route.data['role'] && route.data['role'] === userRole) {
      return true;
    } else {
      router.navigate(['/']);
      return false;
    }
  } else {
    router.navigate(['/login']);
    return false;
  }
};
