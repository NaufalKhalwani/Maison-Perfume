import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Hourglass as HourglassIcon,
  FlaskConical,
  Leaf,
  Gem,
  HeartHandshake,
  ShieldCheck,
  Calendar,
  Clock,
  MapPin,
  Lock,
  MailCheck,
  Send
} from 'lucide-react';

export const ArrowDownward: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <ArrowDown className={className} />
);

export const NorthEast: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <ArrowUpRight className={className} />
);

export const Hourglass: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <HourglassIcon className={className} />
);

export const Science: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <FlaskConical className={className} />
);

export const Eco: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <Leaf className={className} />
);

export const Diamond: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <Gem className={className} />
);

export const VolunteerActivism: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <HeartHandshake className={className} />
);

export const VerifiedUser: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <ShieldCheck className={className} />
);
