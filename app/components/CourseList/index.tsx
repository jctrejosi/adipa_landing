// components/CourseList/CourseList.tsx
"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Star,
  Circle,
  Clock,
  Calendar,
} from "lucide-react";
import styles from "./styles.module.css";

type Course = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  progress?: string;
  rating?: number;
  price: string;
  isLive?: boolean;
  isInProgress?: boolean;
  tags?: string[];
  imageUrl?: string;
};

type SortOption = {
  label: string;
  value: string;
};

type Props = {
  courses: Course[];
  sortOptions: SortOption[];
};

export const CourseList = ({ courses, sortOptions }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  const handleSortChange = (option: SortOption) => {
    setSelectedSort(option);
    setIsDropdownOpen(false);
    // agregar lógica de ordenamiento
  };

  const handleViewDetails = (courseId: string) => {
    console.log("Ver detalle del curso:", courseId);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Cursos que te permitirán potenciar tu carrera.
        </h2>
        <div className={styles.dropdownWrapper}>
          <button
            className={styles.dropdownButton}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedSort.label}
            {isDropdownOpen ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  className={`${styles.dropdownItem} ${
                    selectedSort.value === option.value ? styles.active : ""
                  }`}
                  onClick={() => handleSortChange(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* "Todos" label */}
      <div className={styles.allLabel}>Todos</div>

      {/* Course Grid */}
      <div className={styles.courseGrid}>
        {courses.map((course) => (
          <div key={course.id} className={styles.courseCard}>
            {/* imagen */}
            <div className={styles.imageWrapper}>
              <img
                src={course.imageUrl}
                alt={course.title}
                className={styles.image}
              />
            </div>

            {/* Rating and Live Badge */}
            <div className={styles.cardHeader}>
              {course.rating && (
                <div className={styles.rating}>
                  <Star size={14} fill="#FFB800" color="#FFB800" />
                  <span>{course.rating}</span>
                </div>
              )}
              {course.isLive && (
                <div className={styles.liveBadge}>
                  <Circle size={8} fill="#00FF00" color="#00FF00" />
                  <span>En vivo</span>
                </div>
              )}
            </div>

            {/* Course Title */}
            <h3 className={styles.courseTitle}>{course.title}</h3>

            {/* Course Description */}
            <p className={styles.courseDescription}>{course.description}</p>

            {/* Course Details */}
            <div className={styles.courseDetails}>
              <div className={styles.detailItem}>
                <Calendar size={14} />
                <span>Inicio: {course.startDate}</span>
              </div>
              {course.isInProgress && (
                <div className={styles.detailItem}>
                  <Clock size={14} />
                  <span>En progreso</span>
                </div>
              )}
            </div>

            {/* Price and Button */}
            <div className={styles.cardFooter}>
              <span className={styles.price}>{course.price}</span>
              <button
                className={styles.detailButton}
                onClick={() => handleViewDetails(course.id)}
              >
                Ver detalle +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
