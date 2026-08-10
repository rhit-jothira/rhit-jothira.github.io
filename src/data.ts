import { Project } from './types';

export const projects: Project[] = [
  {
    id: '0',
    title: 'Air to Water Heatpump',
    description: 'An ongoing project to build a custom Air to Water Heatpump system. It was initially constructed and tested utilizing an aftermarket Universal VFD to validate the system mechanics. The end goal is to utilize my custom-designed Variable Frequency Drive (VFD) controller to drive the hermetically sealed compressor using Sensorless Field Oriented Control (FOC). The COP of the unoptimized system was recorded at 2.9.',
    date: 'Jun 2026 - Present',
    tags: ['System Integration', 'HVAC', 'Hardware Design', 'Thermodynamics'],
    imageUrl: '/PXL_20260724_160810912.MP.jpg',
    imageUrls: ['/PXL_20260724_160810912.MP.jpg', '/PXL_20260724_215709378.jpg', '/PXL_20260725_143620931.jpg', '/PXL_20260725_215628208.jpg', '/PXL_20260725_215638384.jpg']
  },
  {
    id: '1',
    title: 'Variable Frequency Drive Controller',
    description: 'Designed a custom VFD controller for precise regulation of a PMSM motor\'s speed and torque. Developed power conversion circuitry capable of converting 240V split-phase input into HV DC 3-phase output. The end goal is to utilize this VFD to control hermetically sealed compressors for my custom heatpump utilizing Sensorless Field Oriented Control (FOC). Currently, the hardware implementation is finished, but the firmware has quite a long way to go.',
    date: 'Jun 2026 - Present',
    tags: ['KiCad', 'Power Electronics', 'Hardware Design'],
    imageUrl: '/Screenshot From 2026-08-08 22-35-36.png',
    imageUrls: [
      '/Screenshot From 2026-08-08 22-35-36.png',
      '/Screenshot From 2026-08-08 22-35-44.png',
      '/Screenshot From 2026-08-08 22-35-48.png',
      '/Screenshot From 2026-08-08 22-35-50.png',
      '/Screenshot From 2026-08-08 22-35-51.png',
      '/Screenshot From 2026-08-08 22-35-53.png',
      '/Screenshot From 2026-08-08 22-35-54.png',
      '/emi_filter_plot.svg'
    ]
  },
  {
    id: '1.5',
    title: 'Custom EMI Filter for Bench Instrumentation',
    description: 'Designed, characterized, and validated a single-stage EMI filter to protect a benchtop oscilloscope and AWG from mains-borne noise. Constructed primarily from components salvaged from decommissioned server power supplies. Features a conventional π-network topology with a tuned parallel RC damper (3.3 Ω, 4 µF) to suppress DM leakage-inductance resonance. Achieved a near-Butterworth response with 20–42 dB of attenuation across the CISPR conducted-emissions band and a verified 31 dB rejection of real-world inverter-drive noise at 308 kHz.',
    date: 'Jul 2026',
    tags: ['Hardware Design', 'EMI/EMC', 'Signal Integrity', 'Power Electronics'],
    imageUrl: '/PXL_20260721_145956546.jpg',
    imageUrls: [
      '/PXL_20260721_145956546.jpg',
      '/PXL_20260721_150000573.jpg',
      '/emi_filter_final_plot.svg'
    ]
  },
  {
    id: '2',
    title: 'IoT HVAC Control System & Custom PCB',
    description: 'Engineered a custom PCB to interface directly with a Midea AC unit, replacing the proprietary hardware to enable localized control. Integrated a custom OpenSource API to establish seamless wireless communication between custom hardware and a mobile application.',
    date: 'Jun 2026',
    tags: ['PCB Design', 'C++', 'API Integration'],
    imageUrl: '/Midea_Dongle.png',
    imageUrls: [
      '/Midea_Dongle.png',
      '/WhatsApp Image 2026-08-08 at 10.52.24 PM.jpeg'
    ]
  },
  {
    id: '3',
    title: 'IR Remote',
    description: 'Designed and developed an event-driven IR remote control firmware using a PIC18F56Q24 microcontroller. The project integrated C and Assembly to configure multiple peripherals including Timer, ADC, and Capture/Compare/PWM (CCP) modules for encoding IR LED signals. Implemented interrupt handlers for debounce and repeat timers, while optimizing power consumption by leveraging idle and low-power sleep modes. Also developed a 4-bit binary LED counter written entirely in Assembly to interact with digital I/O.',
    date: 'Feb 2026',
    tags: ['C', 'Assembly', 'Embedded Systems', 'MPLAB', 'PIC18F56Q24'],
    imageUrl: '/PXL_20251201_144614273(1).jpg',
    videoUrl: '/PXL_20260221_022701843 (0:04.7 - 0:10.2) (0:00 - 0:02.2).mp4'
  },
  {
    id: '13',
    title: 'CSSE220 Final Project',
    description: 'Developed a comprehensive 2D game in Java as the final project for CSSE220. Applied object-oriented design principles, data structures, and GUI development techniques to create an interactive and engaging gameplay experience.',
    date: 'Nov 2025',
    tags: ['Java', 'Object-Oriented Programming', 'Game Development', 'GUI'],
    imageUrl: '/Screenshot From 2026-08-10 10-41-46.png',
    imageUrls: ['/Screenshot From 2026-08-10 10-41-46.png', '/Screenshot From 2026-08-10 10-42-33.png']
  },
  {
    id: '1.7',
    title: 'MATLAB Video Security System',
    description: 'Developed an automated video security monitoring system in MATLAB. The system processes video feeds to detect motion, identify subjects, and trigger security alerts based on computer vision algorithms.',
    date: 'May 2025',
    tags: ['MATLAB', 'Computer Vision', 'Security', 'Algorithms'],
    videoUrl: '/Webcam_Security1.mp4'
  },
  {
    id: '5',
    title: 'Ben Eater 6502 Computer',
    description: 'Assembly and construction of a custom 6502-based computer. Successfully soldered all components, demonstrating precision in hardware assembly and a deep understanding of circuit board population. Gained hands-on experience with foundational computer architecture and digital logic principles.',
    date: 'Apr 2025',
    tags: ['6502', 'Hardware Assembly', 'Computer Architecture', 'Digital Logic'],
    imageUrl: '/1756094283508.jpg'
  },
  {
    id: '6',
    title: 'EEPROM Programmer PCB',
    description: 'Design and fabrication of a Printed Circuit Board (PCB) for an EEPROM programmer. Designed a functional PCB layout, ensuring proper component placement and signal routing for optimal performance. Applied knowledge of schematic capture and PCB design software to create a professional-grade board.',
    date: 'Apr 2025',
    tags: ['PCB Design', 'Schematic Capture', 'EEPROM'],
    imageUrl: '/1756094283509.jpg'
  },
  {
    id: '7',
    title: 'Digital Logic Game Controller (Pong)',
    description: 'Designed a one-hot finite state machine (FSM) using Intel Quartus to manage game logic, scoring, and dynamic speed adjustments. Implemented a custom shift-register Datapath to drive LED displays and engineered synchronous control logic to interface with user input buttons. Verified system reliability through functional waveform simulation and final hardware integration on a DE2 FPGA board.',
    date: 'Jan 2025',
    tags: ['Intel Quartus', 'Schematic Capture', 'Verilog', 'FPGA'],
    imageUrl: '/PXL_20241204_161934388 (Edited).jpg'
  },
  {
    id: '8',
    title: 'Lab Bench Power Supply',
    description: 'Custom-built lab bench power supply from repurposed components. Repurposed a server PSU chassis and implemented boost/buck converters to create a variable-voltage power supply. Integrated a custom PWM controller PCB to regulate the speed of the cooling fans, showcasing knowledge of analog circuit design and thermal management.',
    date: 'Jan 2025',
    tags: ['Power Electronics', 'Hardware Design', 'Analog Circuits'],
    imageUrl: '/1756094283512.jpg'
  },
  {
    id: '9',
    title: '74HC595N 7-Segment Display PCB',
    description: 'My first ever PCB design. Design and fabrication of a simple PCB for a 7-segment display using a 74HC595N shift register. Created an efficient, compact PCB design to drive a 7-segment display, showcasing skills in digital electronics and space optimization. Practiced fundamental circuit design principles and component layout.',
    date: 'Dec 2024',
    tags: ['PCB Design', 'Digital Electronics', 'Shift Register'],
    imageUrl: '/20240221_201219.jpg'
  },
  {
    id: '10',
    title: 'PWM Control PCB with 555 Timer',
    description: 'Design and fabrication of a simple PCB for Pulse Width Modulation (PWM) control using a 555 timer. Designed a compact and effective PCB to generate a variable-duty-cycle signal, demonstrating a solid understanding of analog circuit design. Gained practical experience with a foundational and versatile integrated circuit, the 555 timer.',
    date: 'Dec 2024',
    tags: ['PCB Design', 'Analog Circuits', '555 Timer'],
    imageUrl: '/20240522_210235.jpg'
  },
  {
    id: '11',
    title: 'ESP32 Smart Clock',
    description: 'A smart clock that utilizes NTP time servers for synchronization and fetches real-time data from Weather.gov and WeatherAPI. Features include current conditions, temperature, daily highs/lows, and AQI (processed into a 1-5 category scale). I reverse-engineered the display\'s proprietary connector to ensure ESP32 compatibility using TTL logic, and integrated moon phase tracking along with daily forecasts.',
    date: 'Aug 2024',
    tags: ['ESP32', 'C++', 'Hardware Reverse Engineering', 'API Integration'],
    imageUrl: '/PXL_20240807_222914381.jpg',
    imageUrls: ['/PXL_20240807_222914381.jpg', '/PXL_20240820_190720992.jpg'],
  },
  {
    id: '12',
    title: 'JayWalking Detection System',
    description: 'A hardware and software system utilizing sensors and custom algorithms to detect and monitor jaywalking in real-time.',
    date: 'Mar 2023',
    tags: ['Hardware', 'Sensors', 'Algorithms', 'System Design'],
    imageUrl: '/20230514_172119.jpg',
  }
];
