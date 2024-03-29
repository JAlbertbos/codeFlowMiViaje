import { Component, Input, Output, EventEmitter } from '@angular/core';
import { City, tripDays } from '../data/data';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})

export class DaysComponent {
  dropdownOpen: boolean = false; // Variable para rastrear si el menú desplegable del filtro está abierto
  days: City[] = tripDays; // Arreglo que almacena información sobre los días de viaje
  filteredDays: City[] = tripDays;
  @Input() selectedDay: City | null = null; // Almacena el día seleccionado
  @Output() daySelected = new EventEmitter<City>();
  filterValue: string = ''; // Almacena el valor del filtro
  selectedDays: number[] = [];
  selectedCities: string[] = [];

    // Verifica si un día está seleccionado
  isDaySelected(dayNumber: number): boolean {
    return this.selectedDays.includes(dayNumber);
  }

    // Alterna la selección de un día
  toggleDaySelection(dayNumber: number) {
    if (this.selectedDays.includes(dayNumber)) {
      this.selectedDays = this.selectedDays.filter((day) => day !== dayNumber);
    } else {
      this.selectedDays.push(dayNumber);
    }
  }

    // Verifica si una ciudad está seleccionada
  isCitySelected(cityName: string): boolean {
    return this.selectedCities.includes(cityName);
  }

    // Alterna la selección de una ciudad
  toggleCitySelection(cityName: string) {
    if (this.selectedCities.includes(cityName)) {
      this.selectedCities = this.selectedCities.filter((city) => city !== cityName);
    } else {
      this.selectedCities.push(cityName);
    }
  }
    // Método para alternar el estado del menú desplegable del filtro
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

    // Método para cerrar el menú desplegable al hacer clic en el fondo oscuro
  closeDropdown() {
    this.dropdownOpen = false;
  }

    // Función para mostrar los detalles del día seleccionado
  showDetails(day: City) {
    if (this.selectedDay === day) {
      this.selectedDay = null;
    } else {
      this.selectedDay = day; 
    }
  }

    // Borra los días seleccionados y ciudades seleccionadas, restableciendo los filtros
  resetFilters() {
    this.selectedDays = [];
    this.selectedCities = [];
    this.filteredDays = this.days; // Restablecer los días
  }
    
   // Función para filtrar la búsqueda
  applyFilters() {
    this.filteredDays = this.days.filter((day) => {
      const isSelectedDay = this.selectedDays.includes(day.dayNumber);
      const isSelectedCity = this.selectedCities.includes(day.cityName);
      return isSelectedDay || isSelectedCity;
    });
    if (this.selectedDays.length === 0 && this.selectedCities.length === 0) {
      // Si no se ha seleccionado ningún día ni ciudad, mostrar todos los días
      this.resetFilters();
    }
  }
}
