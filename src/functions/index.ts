import Swal from 'sweetalert2';
import { axiosClient } from '../config/axios';

export const showError = (message: string) => {
  Swal.fire('¡Error!', message, 'error');
};

export const handleLoading = (state: boolean, title?: string) => {
  if (state) {
    Swal.fire({
      title: title || 'Cargando',
      didOpen: () => {
        Swal.showLoading();
      },
    });

    return;
  }

  Swal.close();
};

export const authToken = (token: string | null) => {
  if (token) {
    axiosClient.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axiosClient.defaults.headers.common['x-auth-token'];
  }
};
