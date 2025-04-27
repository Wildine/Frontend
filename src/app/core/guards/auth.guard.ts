import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

//   if (token) {
//     return true;
//   } else {
//     router.navigate(['/login']);
//     return false;
//   }
// };

  if (token) {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const userRole = decodedToken.role;

    // Vérifier si le rôle de l'utilisateur correspond à celui requis par la route
    if (route.data['role'] === userRole) {
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
