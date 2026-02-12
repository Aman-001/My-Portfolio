import { useEffect, useMemo, useState } from 'react';

const RADIUS = 70;
const STROKE = 10;
const VIEWBOX_SIZE = 180;

export default function LoadingShimmer({ duration = 2000, onComplete }) {
	const [progress, setProgress] = useState(0);
	const circumference = useMemo(() => 2 * Math.PI * RADIUS, []);
	const gradientId = useMemo(
		() => `loader-gradient-${Math.round(Math.random() * 1e9)}`,
		[]
	);

	// Dynamic color based on progress
	const getProgressColor = (progress) => {
		if (progress < 33) {
			return {
				start: '#3b82f6', // blue-500
				end: '#60a5fa', // blue-400
				glow: 'rgba(59, 130, 246, 0.5)',
				textShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
			};
		} else if (progress < 67) {
			return {
				start: '#a855f7', // purple-500
				end: '#c084fc', // purple-400
				glow: 'rgba(168, 85, 247, 0.5)',
				textShadow: '0 0 20px rgba(168, 85, 247, 0.6)',
			};
		} else {
			return {
				start: '#10b981', // emerald-500
				end: '#34d399', // emerald-400
				glow: 'rgba(16, 185, 129, 0.5)',
				textShadow: '0 0 20px rgba(16, 185, 129, 0.6)',
			};
		}
	};

	const colors = getProgressColor(progress);

	useEffect(() => {
		let startTime;
		let rafId;

		const tick = (time) => {
			if (!startTime) {
				startTime = time;
			}

			const elapsed = time - startTime;
			const normalizedTime = elapsed / duration;
			
			// Smoother easing function for more dynamic speed changes
			const easeOutQuart = 1 - Math.pow(1 - normalizedTime, 4);
			let next = Math.round(easeOutQuart * 100);

			next = Math.min(100, Math.max(0, next));
			setProgress(next);

			if (elapsed < duration) {
				rafId = requestAnimationFrame(tick);
			} else if (onComplete) {
				onComplete();
			}
		};

		rafId = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(rafId);
	}, [duration, onComplete]);

	const dashOffset = circumference - (progress / 100) * circumference;

	return (
		<div
			className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
		>
			{/* Ambient glow background */}
			<div
				className="absolute inset-0 flex items-center justify-center"
				style={{
					background: `radial-gradient(circle at 50% 50%, ${colors.glow} 0%, transparent 60%)`,
					transition: 'background 0.5s ease-in-out',
				}}
			/>
			<div
				className="relative animate-pulse z-10"
				style={{ 
					width: VIEWBOX_SIZE, 
					height: VIEWBOX_SIZE,
					animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				}}
			>
				<svg
					width={VIEWBOX_SIZE}
					height={VIEWBOX_SIZE}
					viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
					style={{ transform: 'rotate(-90deg)' }}
					aria-hidden="true"
				>
					<defs>
						<linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor={colors.start} />
							<stop offset="100%" stopColor={colors.end} />
						</linearGradient>
					</defs>
					<circle
						cx={VIEWBOX_SIZE / 2}
						cy={VIEWBOX_SIZE / 2}
						r={RADIUS}
						fill="none"
						stroke="rgba(255, 255, 255, 0.08)"
						strokeWidth={STROKE}
					/>
					<circle
						cx={VIEWBOX_SIZE / 2}
						cy={VIEWBOX_SIZE / 2}
						r={RADIUS}
						fill="none"
						stroke={`url(#${gradientId})`}
						strokeWidth={STROKE}
						strokeLinecap="round"
						strokeDasharray={circumference}
						strokeDashoffset={dashOffset}
						style={{
							filter: `drop-shadow(0 0 15px ${colors.glow})`,
							transition: 'stroke-dashoffset 0.15s ease-out, filter 0.3s ease-in-out',
						}}
					/>
				</svg>
				<div
					className="absolute inset-0 flex items-center justify-center"
					style={{
						fontFamily: 'Poppins, sans-serif',
						fontSize: '2.5rem',
						fontWeight: 700,
						letterSpacing: '0.04em',
						color: '#ffffff',
						textShadow: colors.textShadow,
						transition: 'text-shadow 0.3s ease-in-out',
					}}
				>
					{progress}%
				</div>
				<div
					className="absolute"
					style={{
						left: '50%',
						top: 'calc(50% + 74px)',
						transform: 'translateX(-50%)',
						fontFamily: 'Poppins, sans-serif',
						fontSize: '0.8rem',
						letterSpacing: '0.28em',
						textTransform: 'uppercase',
						color: colors.end,
						textShadow: `0 0 10px ${colors.glow}`,
						transition: 'color 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
						fontWeight: 500,
					}}
				>
					Loading
				</div>
			</div>
		</div>
	);
}
