import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

const Elements22 = (props) => {

  const { scrollYProgress } = useScroll();
  
  const scroll = useTransform(
    scrollYProgress, 
    [0, 450],
    [0, 100]
  )
  return (
    <svg
    className='flower4'
      height="50pt"
      width="70pt"
      version="1.1"
      viewBox="0 0 864 864"
      xmlns="http://www.w3.org/2000/svg"
	  
    >
      <defs />
      <motion.path 
	 style={{pathLength: scroll}} 
	 d="M802.62,509.65c-4.42-9.81-6.87-19.83-7.32-30.49c-0.36-8.54-1.14-17.05-1.45-25.59c-0.67-18.2-4.78-35.48-13.03-51.77
					c-1.63-3.22-3.37-6.4-1.02-10.41c6.41-10.95,9.15-23.25,12.29-35.38c8.58-33.15,1.8-63.73-15.59-92.46
					c-4.44-7.34-10.34-13.63-16.33-19.71c-6.4-6.5-9.57-13.79-8.91-23.02c0.91-12.9-1.81-25.39-4.31-38.02
					c-3.78-19.08-15.68-29.68-33.13-35.39c-12.08-3.96-24.53-4.74-37.16-3.67c-7.55,0.64-7.54,0.51-7.81-6.91
					c-0.65-17.72-3.28-35.19-8.07-52.23c-6.88-24.46-27.2-39.53-52.51-39.64c-5.13-0.02-10.26,0-15.38,0.27
					c-4.19,0.23-6.47-1.22-6.53-5.66c-0.19-12.44-9.35-18.72-21.14-20.77c-13.54-2.35-26.66-0.76-39.27,4.75
					c-15.31,6.7-28.76,16.08-40.79,27.67c-10.67,10.28-10.86,10.21-21.63,0.14c-14.63-13.68-30.26-26.13-48.03-35.37
					c-28.04-14.57-57.22-20.4-88.06-8.8c-9.52,3.58-17.58,9.16-24.91,16.11c-11.66,11.08-25.14,19.26-41.52,19.81
					c-17.87,0.6-32.08,8.54-45.61,19.03c-18.71,14.49-26.21,33.74-25.09,56.9c0.49,10.13,4.28,18.75,11.33,26.01
					c1.02,1.04,3.26,1.52,2.25,3.92c-0.81,0.16-1.63,0.47-2.46,0.47c-28.27,0.23-52.45,11.5-74.91,27.54
					c-12.64,9.03-20.77,21-23.83,36.19c-2.04,10.13-1.43,19.88,6.08,28.08c1.32,1.44,2.39,3.22,3.19,5.02
					c2.27,5.08,0.01,9.47-2.64,13.61c-2.3,3.61-5.7,1.34-8.59,1.13c-7.13-0.5-14.2-0.11-21.32,0.45
					c-17.26,1.36-29.61,11.11-40.14,23.52c-9.16,10.79-12.69,23.25-8.84,37.44c1.95,7.19-0.33,13.33-6.15,18.3
					c-12.99,11.09-18.84,26.19-22.44,42.24c-2.49,11.11-1.88,22.11,4.31,32.21c4.33,7.08,9.08,13.89,15.36,19.34
					c16.09,13.97,32.57,27.46,51.63,38.38c-1.95,2.61-3.93,5.29-5.94,7.94c-7.52,9.85-11.32,20.96-11.32,33.35
					c0,10.82,4.41,19.38,13.78,24.9c5.87,3.47,12.12,6.28,18.19,9.42c1.66,0.86,3.95,0.97,4.42,3.97c-2.08,2.64-4.4,5.5-6.62,8.44
					c-6.95,9.16-12.38,19.1-15.34,30.29c-5.12,19.34,3.53,40.93,20.77,50.85c5.1,2.94,8.93,6.78,12.39,11.43
					c4.08,5.49,5.71,11.67,6.83,18.18c2.56,14.87,10.3,24.96,24.76,31.03c14.88,6.25,30.16,7.68,45.85,8.54
					c14.69,0.81,28.23-2.02,41.04-11.33c3.16,6.61,4.24,12.74,4.96,18.95c0.66,5.66,1.04,11.35,1.83,16.99
					c2.32,16.53,11.89,26.66,28.35,29.81c8.69,1.67,17.47,1.77,26.36,1.56c19.42-0.44,36.56-8.03,53.5-16.18
					c10.21-4.92,20.84-9.44,28.11-18.86c2.56-3.31,4.54-1.86,6.78,0.67c12.1,13.71,25.42,26.05,40.39,36.64
					c7.44,5.27,15.35,9.77,22.82,15.02c22.17,15.57,45.52,20.26,70.25,5.58c1.71-1.01,3.48-1.95,5.18-2.98
					c14.97-9.01,24.45-21.67,27.32-39.27c2.25-13.84,4.13-15.07,18.43-15.7c0.85-0.04,1.71-0.07,2.56-0.04
					c15.88,0.53,27.84-6.63,37.32-18.84c7.29-9.4,11.81-20.04,14.82-31.46c1.45-5.52,1.69-5.55,6.76-3.38
					c48.12,20.64,94.39-8.03,110.35-43.84c5.33-11.96,10.91-23.82,15.89-35.93c4.26-10.35,10.93-18.51,19.83-25.12
					c8.32-6.19,17.37-10.85,27.19-14.06c10.27-3.36,15.72-10.49,17.57-21.03C810.35,527.99,806.68,518.67,802.62,509.65z
					 M682.05,154.54c10.29-0.62,20.47,1.29,30.11,5c11.58,4.46,19.37,12.04,21.73,25.08c2.24,12.38,4.32,24.63,3.21,37.24
					c-1.03,11.73,2.6,21.74,10.77,30.34c5.67,5.97,11.51,11.93,15.77,19.03c15.24,25.36,21.6,52.37,14.26,81.7
					c-2.26,9.04-3.4,18.44-8.19,26.98c-3.97-1.94-5.73-5.75-8.57-8.44c-16.58-15.66-34.14-30.09-53.29-42.51
					c-2.36-1.53-5.07-3.42-7.67-3.49c-6.27-0.17-7.26-4.26-8.12-8.92c-2.01-10.85-1.49-21.43,2.39-31.9
					c4.87-13.15,8.03-26.67,7.48-40.87c-0.28-7.13-2.35-13.29-7.54-18.43c-4.48-4.42-9.59-6.96-15.91-7.11
					c-8.85-0.21-17.73-0.06-26.21,2.61c-5.59,1.76-9.21-0.04-12.44-4.29c-1.93-2.55-3.59-5.29-4.12-8.35
					c-2.76-16.14-7.29-31.57-19.02-45.86C639.88,159.53,660.83,155.82,682.05,154.54z M519.02,377.79c-0.03-1.12,0.13-2.25,0.2-3.35
					c2.92-1.05,3.41,1.55,4.51,2.9c1.8,2.19,3.11,4.81,4.99,6.91c11.41,12.7,15.26,27.31,12.91,44.22
					c-1.66,11.9-5.89,22.1-15.72,29.03c-10.43,7.35-13.73,16.78-11.05,28.92c1.04,4.71,1.76,9.52,2.26,14.32
					c1.79,17.23-8.06,32.31-23.64,37.06c-6.43,1.96-12.46,0.65-18.41-1.22c-16.9-5.33-31.51-13.74-41.83-29.04
					c-7.01-10.4-15.07-19.98-15.95-33.46c4.43-1.29,8.97-0.35,13.44-0.29c15.19,0.23,28.3-5.55,40.35-14.05
					c6.84-4.82,10.12-12.18,11.73-20.18c0.56-2.76,1.62-4.38,4.1-5.86C508.07,421.11,519.66,402.94,519.02,377.79z M551.58,561.91
					c0.73,0.88,1.4,1.8,2.18,2.63c15.69,16.41,19.36,36.61,16.25,57.89c-2.66,18.16-9.56,35.09-21.73,49.38
					c-5.23,6.14-11.39,11.04-18.52,14.85c-18.55,9.92-37.77,17.3-59.63,16.54c-16.89,0.94-32.71-4.95-48.52-10.56
					c-15.9-5.65-30.33-14.22-44.54-23.24c-10.42-6.6-15.43-17.23-21.65-27c-1.8-2.82-0.01-3.99,2.75-4.5
					c6.15-1.13,12.39-2,18.4-3.68c29.12-8.17,56.16-20.03,77.27-42.86c9.84-10.65,17.56-22.35,21.84-36.19
					c1.27-4.11,2.88-5.54,7.73-5.41c16.33,0.46,29.25-6.37,37.39-20.84c5.88-10.46,8.19-21.74,6.2-33.77
					c-0.79-4.77-1.45-9.58-1.77-14.39c-0.51-7.57,3.48-13.32,10.28-15.91c2-0.76,3.24,0.08,4.61,1.07c4.78,3.45,8.22,7.8,9.39,13.74
					c3.51,17.78,4.89,35.5-0.86,53.15c-1.05,3.23-1.72,6.61-2.27,9.97C545.21,549.9,546.93,556.32,551.58,561.91z M337.01,111.49
					c-1.31-5.53-2.52-11.1-3.56-16.69c-3.2-17.2,6.39-28.79,23.59-26.28c22.75,3.31,45.73,7.13,63.82,23.57
					c2.31,2.11,4.88,4.01,6.85,6.4c10.8,13.12,21.45,26.37,32.44,39.93c-6.8,4.62-13.28,9.17-18.52,15.26
					c-10.4,12.11-17.09,26.1-21.48,41.31c-0.79,2.73-1.44,5.51-2.4,8.19c-1.95,5.46-5.77,9.03-11.38,10.61
					c-2.47,0.7-4.99,1.21-7.39,2.07c-11.08,3.95-17.78,13.01-17.11,24.79c0.95,16.83,5.24,32.58,17.83,44.91
					c0.6,0.59,1.13,1.27,1.63,1.95c0.13,0.18,0.02,0.53,0.02,1.69c-13.63,0.56-25.84,5.21-37.81,10.56
					c-3.35,1.5-7.13,3.03-9.43,5.67c-5.43,6.22-10.52,5.15-17.09,1.83c-13.7-6.92-20.88-18.74-26.43-32.15
					c-11.74-28.41-7.81-56.34,2.68-83.98c5.05-13.31,10.89-26.37,18.14-38.57C339.24,139.38,340.44,125.91,337.01,111.49z
					 M424.67,406.89c-9.09-7.14-8.55-15.33,1.27-21.5c6.21-3.9,13.03-4.11,19.74-1.84c17.24,5.84,32.09,20.97,28.96,44.66
					c-1.45,10.97-6.48,20.37-17.41,25.68c-22.02,10.7-42.9,8.59-62.86-4.93c-5.17-3.5-9.88-7.67-14.82-11.51
					c-7.93-6.17-11.73-14.54-12.48-24.29c-0.84-10.91,1.01-21.54,4.49-31.88c0.43-1.27,0.53-2.88,3.26-3.33
					c0.81,6.22,1.99,12.06,4.26,17.62c4.65,11.41,12.68,19.41,24.3,23.63c7.55,2.74,16.95,0.5,21.99-5.22
					C427.55,411.49,427.78,409.33,424.67,406.89z M422.86,359.4c10.41-16.14,23.64-28.33,44.46-28.6
					c7.14-0.09,13.14,2.09,18.86,6.48c13.61,10.43,21.42,23.91,23.59,40.87c0.82,6.36,0.26,12.45-1.98,18.43
					c-4.37,11.67-12.6,20.6-21.42,29.72c0.03-18.19-6.04-32.88-20.08-43.78c-14.03-10.9-29.22-13.23-45.81-4.55
					C418.62,370.84,419.52,364.58,422.86,359.4z M364.22,371.41c-1.63,3.69-3.51,6.65-8.33,7.36c-5.31,0.78-8.59,5.28-12.01,9.09
					c-3.42,3.81-6.43,8.01-10.56,11.11c-3.35,2.51-5.06,1.98-6.02-2.03c-0.66-2.73-1.05-5.65-0.88-8.44
					c0.64-10.5,0.88-21.04,2.45-31.47c0.55-3.69,1.51-7.24,2.87-10.68c5-12.6,25.11-34.03,37.5-39.54
					c10.92-4.86,21.93-9.61,34.25-9.53c1.42,0.01,2.84,0.06,4.24,0.24c0.44,0.06,0.82,0.6,1.22,0.92c0.52,0.97-0.15,1.67-0.67,2.25
					c-6.28,7.05-11.66,14.86-16.09,23.07C383.46,340.01,371.71,354.46,364.22,371.41z M398.28,267.1
					c-3.34-7.62-5.25-15.65-5.97-23.91c-0.89-10.21,2.78-15.54,12.38-18.57c1.9-0.6,3.83-1.06,5.74-1.63
					c7.87-2.35,13.36-7.4,16.5-14.92c1.31-3.14,2.32-6.41,3.34-9.66c2.49-7.89,5.62-15.49,9.74-22.69
					c9.72-17.01,23.87-27.94,43.2-31.92c2.23-0.46,4.43-1.07,6.67-1.47c10.33-1.85,18.5-7.23,24.59-15.61
					c3.51-4.82,6.53-9.99,9.69-15.06c4.06-6.5,9.42-11.47,16.84-13.7c7.28-2.18,10.74,0.09,12.02,7.6
					c0.76,4.48,1.27,9.01,1.85,13.53c1.21,9.39,6,16.34,14.06,21.26c8.25,5.04,16.52,10,24.22,15.94
					c15.07,11.62,24.32,26.96,29.05,45.01c2.32,8.87,4.55,17.57,11.19,25.26c-16.71,8.61-32.65,16-50.42,18.51
					c-3.37,0.48-6.71,1.32-9.97,2.3c-13.26,3.97-26.45,2.98-39.59-0.42c-7.71-2-15.4-4.08-23.01-6.43
					c-13.86-4.28-27.68-3.55-41.11,1.11c-16.72,5.81-26.88,17.71-29.11,35.52c-0.51,4.08-2.07,6.2-5.76,7.26
					c-1.09,0.31-2.22,0.71-3.12,1.36c-7.72,5.55-14.29,2.65-20.73-2.55C405.13,278.84,401.06,273.44,398.28,267.1z M310.68,296.76
					c5.68,8.49,12.47,15.48,21.93,19.66c1.78,0.79,3.73,1.39,4.95,3.11c0.46,2.12-1.19,3.11-2.35,4.23
					c-10.01,9.75-15.56,21.67-16.95,35.47c-1,9.91-1.62,19.86-2.34,29.8c-0.31,4.31,0.32,8.56,1.64,12.64
					c3.26,10.03,11.49,12.8,20.05,6.79c3.77-2.64,6.66-6.19,9.63-9.65c2.19-2.54,3.85-5.59,8.53-8.6c-1.61,7.9-2.9,14.28-2.93,20.81
					c-0.09,15.47,5.24,28.47,17.67,38c9.68,7.43,18.74,15.9,30.43,20.3c3.39,1.28,3.1,3.23,2.14,6.05
					c-7.36,21.7-34.92,33.94-55.76,24.73c-10.88-4.81-20.38-11.12-27.04-21.38c-6.24-9.64-16.19-15.13-25.76-20.67
					c-10.13-5.86-21.2-9.65-32.82-11.71c-7.28-1.29-14.47-3.12-21.76-4.32c-11.1-1.83-20.14-7.38-28.47-14.6
					c-9.67-8.39-13.96-19.04-14.45-31.6c-0.7-17.71,4.77-32.79,19.62-43.08c19.98-13.84,28.74-34.11,33.25-56.65
					c1.95-9.74,5.19-18.56,10.61-26.72c3.78-5.69,7.49-11.43,11.28-17.12c2.87-4.33,7.1-6.48,12.1-7.18
					c7.27-1.02,9.95,1.27,11.52,8.5C298.69,268.58,301.89,283.61,310.68,296.76z M280.87,465.11c11.5,4.33,22.5,10,29.52,20.19
					c9.42,13.67,22.55,21.22,37.43,26.9c11.36,4.34,22.35,3.44,33.1-1.68c10.48-4.98,19.25-12.03,25.53-21.97
					c0.99-1.56,1.3-3.9,4.14-4.34c3.05,17.5,14.39,30.33,24.91,43.61c6.85,8.66,16.88,12.28,26.58,16.35
					c9.73,4.08,9.76,4.09,5.05,13.26c-11.1,21.58-28.74,36.44-49.7,47.67c-19.19,10.28-39.48,17.48-61.18,20.4
					c-13.35,1.79-26.69,0.97-40.01-0.02c-7.65-0.57-15.25-1.8-22.85-2.9c-10.39-1.5-13.3-4.25-13.89-14.86
					c-1.26-23.03-1.52-46.05,2.39-68.93c2.93-17.15,3.66-34.51,4.07-51.86C286.17,478.72,285.64,477.37,280.87,465.11z
					 M517.94,339.37c-0.34,5.31-0.18,10.77-3.71,15.94c-4.03-9.84-10.93-16.89-18.44-23.49c-14.87-13.07-35.07-15.14-52.11-4.96
					c-9.39,5.61-17.2,13.04-23.57,21.94c-5.14,7.19-7.36,15.32-7.02,24.12c0.21,5.42,0.14,10.73-1.65,15.97
					c-2.18,6.42-1.33,12.86,0.95,19c-2.03,2.06-3.86,1.04-5.64,0.19c-12.55-6.01-18.29-16.63-19.58-29.89
					c-1.01-10.35,0.7-20.36,4.9-29.98c5.74-13.14,13.19-25.42,22.57-36.01c15.61-17.62,35.89-21.87,58.28-15.91
					c9.62,2.56,18.67,6.84,27.45,11.58C512.89,314.63,518.85,325.14,517.94,339.37z M508.37,295.81c-2.65,0.35-5.03-0.12-7.36-1.45
					c-16.12-9.2-33.2-14.83-52.04-13.78c-0.49,0.03-1-0.45-2.38-1.1c2.46-12.69,9.17-22.35,21.19-27.56
					c11.83-5.14,24.31-5.62,36.77-2.23c8.23,2.24,16.36,4.86,24.53,7.32c15.84,4.77,31.54,5.18,47.95,1.68
					c20.21-4.31,39.42-10.58,57.83-19.98c12.73-6.49,26.31-10.23,41.01-10.05c7.84,0.09,15.22,5.97,15.21,14.87
					c-0.01,9.46-1.27,18.71-4.32,27.69c-0.92,2.69-1.68,5.45-2.74,8.08c-8.36,20.61-6.51,40.99,3.21,60.3
					c8.39,16.68,13.5,34.38,19.14,51.96c2.96,9.25,0.63,18.61-1.01,27.86c-0.43,2.43-2.14,3.12-4.25,3.41
					c-5.63,0.8-11.24,2.05-16.9,2.33c-12.18,0.62-24.33,2.94-36.58,1.19c-11.33-1.62-21.04-6.32-29.26-14.5
					c-16.45-16.37-30.34-34.63-41.36-55.03c-8.97-16.61-19.62-32.06-32.34-45.96C535.06,300.4,523.36,293.84,508.37,295.81z
					 M489.03,60.47c11.17-9.83,22.68-18.92,36.2-25.42c10.61-5.1,21.61-6.79,33.2-5.82c2.88,0.24,5.61,0.89,8.26,1.98
					c4.08,1.67,6.65,4.46,6.32,9.09c-1.16,16.23,8.36,20.18,22.09,19.48c4.83-0.24,9.67-0.55,14.51-0.47
					c18.38,0.3,32.58,10.56,37.3,28.14c4.73,17.62,7.23,35.69,7.09,54.02c-0.02,2.48,0.58,5.45-3.16,5.91
					c-10.74,1.32-20.98,5.25-31.86,5.93c-5.62,0.34-10.47-0.42-14.95-4.42c-7.88-7.04-17.02-12.42-26.18-17.6
					c-6.57-3.71-9.9-9.05-10.63-16.4c-0.45-4.52-0.95-9.08-1.92-13.51c-2.94-13.36-11.92-18.89-25.33-15.66
					c-11.33,2.73-20,9.29-26.41,18.93c-2.68,4.03-5.22,8.15-7.9,12.18c-4.62,6.96-11.01,11.32-19.22,13.15
					c-4.71,1.05-9.5,2.11-13.94,3.94c-4.34,1.79-6.9,0.56-9.31-3c-6.54-9.67-13.2-19.25-19.85-28.84
					c-2.85-4.12-5.77-8.18-9.23-13.07C457.35,87.59,473.39,74.23,489.03,60.47z M202.68,115.29c-0.74-19.97,7.54-35.07,23.56-46.57
					c10.38-7.45,21.14-12.91,34.39-13.27c20.83-0.57,37.28-10.92,51.78-25.05c12.49-12.18,27.96-17.37,45-17.54
					c9.93-0.1,19.85,1.39,29.59,3.75c10.34,2.5,19.86,6.83,29.17,11.85c17.64,9.51,33.19,22,49.09,34.02
					c2.05,1.55,3.63,3.04,0.74,5.23c-10.36,7.84-21.15,14.53-34.93,13.84c-4.1-0.21-7.68-1.13-11.01-3.8
					c-8.12-6.51-17.46-10.64-27.55-13.1c-9.95-2.43-19.75-5.47-29.9-7.08c-5.38-0.86-10.75-1.23-16.1,0.18
					c-17.66,4.65-26.5,18.48-23.36,36.97c1.57,9.26,3.61,18.43,5.3,27.67c0.94,5.12,1.04,10.38-1.24,15.12
					c-7.01,14.59-14.18,29.12-20.8,44.7c-6.64-4.71-12.25-8.55-17.72-12.6c-15.82-11.71-33.73-17.45-53.19-18.83
					c-5.4-0.39-10.78-0.94-16.18-1.28c-2.56-0.16-4.15-0.88-4.64-3.79c-0.78-4.61-3.56-8.32-6.27-12
					C204.38,128.22,202.93,122.07,202.68,115.29z M113.17,210.91c2.97-10.54,8.99-18.85,17.73-25.43
					c23.85-17.96,50.53-26.89,80.48-25.71c10.81,0.42,21.6,0.97,32.37,2.16c16.91,1.87,31.69,8.76,45.47,18.28
					c3.73,2.58,7.1,5.74,11.52,7.25c2.26,0.78,3,2.17,2.25,4.6c-4.21,13.63-7.42,27.48-8.19,41.8c-0.19,3.55-1.95,4.05-5.12,3.46
					c-11.71-2.18-20.53,2.44-27.04,12.06c-4.63,6.84-9.28,13.66-13.87,20.53c-4.34,6.5-7.02,13.64-8.2,21.36
					c-1.87,12.27-6.53,23.54-12.26,34.43c-2,3.79-4.33,7.41-7.42,10.4c-8.94,8.64-19.01,16.18-25.52,27.06
					c-1.2-0.92-1.94-1.19-2.03-1.6c-2.89-12.99-11.95-21.16-22.46-27.8c-12.06-7.62-23.26-16.41-34.77-24.77
					c-6.23-4.52-11.32-10.4-15.77-16.71c-5.72-8.11-6.77-16.73-2.28-25.79c0.88-1.79,1.66-3.63,2.57-5.4
					c4.57-8.88,3.47-17.44-2.9-24.65C110.79,228.59,110.56,220.16,113.17,210.91z M56.37,442.71c-7.3-5.91-14.86-11.49-22.1-17.46
					c-3.28-2.7-6.05-6-9.04-9.03c-11.29-11.45-12.71-24.75-7.75-39.47c3.39-10.07,7.16-19.83,15.38-27.12
					c9.58-8.48,12.11-19.25,8.73-31.05c-3.69-12.88,0.98-22.83,9.22-31.92c10.2-11.25,22.55-18.1,38.14-18.04
					c5.07,0.02,10.15,0,16.07,0c-4.18,24.01,10.1,37.99,25.28,51.45c2.76,2.44,5.92,4.42,8.85,6.67c0.34,0.26,0.37,0.94,0.56,1.51
					c-1.93,1.89-4.28,0.62-6.4,0.7c-10.49,0.42-20.27,2.99-28.7,9.47c-11.53,8.86-17.09,20.6-14.86,35.08
					c2.6,16.81,4.15,33.77,10.7,49.89c7.73,19.01,3.49,29.01-14.12,39.13C75.35,457,65.63,450.21,56.37,442.71z M78.06,530.28
					c-8.19-3.97-11.2-10.68-10.58-19.57c1.01-14.7,8.53-25.64,19.54-34.58c3.53-2.87,7.47-5.2,11.12-7.93
					c16.23-12.15,21.25-25.96,14.3-44.85c-5.75-15.64-8.89-31.69-11.6-47.97c-2.64-15.89,3.76-28.01,18.48-34.44
					c11.54-5.04,24.21-5.48,35.1-1.65c12.61,4.44,23.94,12.64,29.05,26.94c3.27,9.16,5.29,17.76,4.38,27.79
					c-2.53,28.1,18.38,49.48,42.12,57.34c10.54,3.49,21.59,5.04,32.52,6.98c9.73,1.73,9.72,2.15,10.56,12.08
					c2.04,24.01-0.62,47.75-4.09,71.41c-1.66,11.29-2.96,22.57-2.65,33.98c0.1,3.83-0.9,5.97-4.95,7.57
					c-10.64,4.19-21.32,7.94-32.78,9c-2.54,0.23-5.09,0.4-7.64,0.59c-9.73-0.76-19.09-2.6-28.26-6.12
					c-17.31-6.66-34-14.42-49.78-24.23c-14.99-9.32-30.33-17.99-47.03-24.06C89.73,536.33,83.95,533.13,78.06,530.28z
					 M212.48,696.55c-2.59,1.67-5.33,1.76-8.19,1.6c-13.63-0.75-27.27-1.38-40.88-2.29c-10.77-0.74-20.29-5.46-29.49-10.54
					c-6.53-3.61-8.43-10.67-9.46-17.42c-1.48-9.61-5.6-17.76-11.34-25.39c-3.66-4.87-7.96-8.74-13.27-11.77
					c-14.66-8.36-20.81-23.33-17.04-39.85c2.92-12.77,10.41-23.26,16.52-34.45c1.02-1.87,2.4-2.19,4.22-1.27
					c2.54,1.27,5.19,2.36,7.62,3.81c10.26,6.1,20.41,12.4,30.7,18.44c5.63,3.31,11.41,6.38,17.23,9.35
					c5.79,2.95,11.72,5.63,18.33,8.78c-4.34,6.4-7.4,12.13-9.73,18.28c-3.86,10.18-3.29,20.09,1.39,29.78
					c5.83,12.07,14.3,21.81,25.9,28.71c7.13,4.24,13.82,9.01,19.04,15.59C217.43,692.16,217.06,693.59,212.48,696.55z
					 M359.83,725.76c-4.65,1.43-8.73,4.14-12.83,6.71c-12.86,8.08-26.61,14.4-40.94,19.09c-15.66,5.13-31.93,5.67-48.06,1.91
					c-9.57-2.23-15.29-8.37-16.12-18.52c-0.4-4.82-1.13-9.63-1.39-14.45c-1.29-24.78-13.25-43.09-33.98-55.96
					c-7.28-4.52-14.57-8.86-20.23-15.5c-14.64-17.19-13.75-27.15-4.7-47.93c1.37-3.14,3.51-3.32,6.23-2.31
					c5.34,1.99,10.71,3.78,16.34,4.85c18.3,3.48,35.66,0.02,52.61-6.77c2.6-1.04,5.16-2.19,8.76-3.72
					c0.64,7.23,0.84,13.49,1.8,19.63c2.15,13.64,7.82,19.5,21.21,21.97c14.29,2.64,28.67,4.77,43.25,4.52
					c4.5-0.08,6.75,1.47,9.3,5.41c8.86,13.67,10.82,29.23,13.17,44.62c1.56,10.23,3.75,20.16,8.11,29.5
					C364.03,722.39,364.13,724.45,359.83,725.76z M609,630.08c-2.6,17.17-6.44,34.11-11.3,50.81c-2.41,8.27-6.06,15.9-11.06,22.95
					c-7.07,9.97-16.35,15.56-28.76,15.7c-4.83,0.05-9.63,0.49-14.35,1.86c-8.38,2.44-13.84,7.55-15.91,16.14
					c-0.93,3.87-2.08,7.7-2.92,11.59c-1.77,8.16-6.21,14.65-12.5,19.86c-8.44,6.98-17.93,12.55-28.57,14.82
					c-12.81,2.74-25.28-0.68-35.64-8.15c-10.62-7.66-21.68-14.65-32.23-22.41c-11.54-8.49-21.58-18.51-31.76-28.45
					c-13.06-12.75-18.15-29.1-21.15-46.6c3.05-0.84,4.4,1.37,6.05,2.53c22.42,15.66,46.8,27.04,73.41,33.4
					c23.99,5.74,47.59,3.8,70.36-5.48c13.44-5.47,27.1-11.41,37.25-22.07c27.65-29.02,40.13-62.94,30.86-103.18
					c-0.38-1.65-0.65-3.33-0.92-5c-0.04-0.22,0.19-0.48,0.6-1.43c6.28,0.75,12.19,1.88,18.13,2.06c5.02,0.14,6.9,2.6,7.97,6.98
					C610.14,600.57,611.25,615.31,609,630.08z M613.26,565.18c-13.14,0.58-26.17-1.42-38.8-5.07c-12.6-3.64-15.81-9.07-12.24-21.62
					c5.46-19.22,5-38.17-0.31-57.28c-2.45-8.82-6.2-16.54-14.34-21.37c-3.45-2.04-3.43-4.18-1.91-7.73
					c5.53-12.9,9.1-26.25,9.31-40.5c0.13-8.55-1.56-16.42-5.68-23.75c-5.31-9.45-10.86-19.27-18.82-26.25
					c-6.59-5.78-6.64-10.63-5.15-17.93c3.01-14.71,0.44-28.34-10.54-39.54c-0.55-0.56-0.77-1.45-1.71-3.3
					c11.2,2.09,18.94,7.83,24.97,15.99c10.69,14.45,19.82,29.84,27.55,46.11c10.97,23.11,25.84,43.49,44.36,61.16
					c13.43,12.8,29.85,17.34,47.87,16.28c17.33-1.01,34.6-2.96,51.64-6.5c5.04-1.05,10.16-1.33,15.3-0.7
					c6.03,0.75,9.62,3.84,11.14,9.98c2.87,11.63,1.08,22.58-3.69,33.28c-4.46,9.98-11.18,18.51-17.65,27.16
					c-16.95,22.68-37.36,41.25-63.15,53.7C639.23,563.18,626.32,564.61,613.26,565.18z M785.33,547.59
					c-4.48,1.83-9.06,3.48-13.33,5.72c-18.73,9.77-33.59,23.1-41.26,43.59c-4.08,10.91-8.99,21.58-14.4,31.91
					c-13.98,26.65-35.42,42.45-66.27,43.76c-9.74,0.41-19.37,0.02-28.6-3.62c-6.77-2.66-6.87-2.79-5.61-9.94
					c1.24-7.01,2.58-14,3.74-21.02c2.99-18.16,2.95-36.31-0.96-54.34c-0.8-3.69,0.13-5.22,3.89-5.64
					c37.14-4.23,64.83-24.54,87.99-52.26c11.7-14.01,22.41-28.78,30.47-45.24c6.03-12.29,8.77-25.2,5.77-38.95
					c-2.79-12.8-7.35-17.45-20.16-19.78c-3.32-0.6-6.7-0.83-11.25-1.37c5.21-16.83,2.81-32.29-2.59-47.72
					c-3.53-10.07-6.23-20.44-10.83-30.18c0.47-0.34,0.95-0.69,1.43-1.03c5.72,4.01,11.66,7.74,17.11,12.08
					c8.01,6.39,15.83,13.04,23.45,19.89c21.66,19.48,31.73,44.69,35,72.95c1.6,13.85,2.12,27.82,3.28,41.73
					c0.67,8.01,2.67,15.7,6.27,22.93c2.8,5.63,5,11.49,6.47,17.6C797.26,538.3,794.34,543.91,785.33,547.59z"
      fill="none"
        
       
      stroke='#693747'
      
      strokeOpacity="1"
      strokeWidth="9"/>
       
      
    </svg>
  );
};

export default Elements22;