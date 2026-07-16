import { motion } from "framer-motion";

function TimelineCard({
  title,
  image,
  description,
  index,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className="mx-auto mb-20 max-w-3xl"
    >
      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">

        <img
          src={image}
          alt={title}
          className="h-[400px] w-full object-cover"
        />

        <div className="p-8">

          <h2 className="text-3xl font-bold text-rose-600">
            {title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            {description}
          </p>

        </div>

      </div>
    </motion.div>
  );
}

export default TimelineCard;