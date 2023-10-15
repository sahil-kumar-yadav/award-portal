export async function load({ params }) {
  const submissionId = params.submissionId;
  const submission = await prisma.submission.findUnique({
    where: {
      id: submissionId,
    },
  });
  return {
    submissionId: params.submissionId,
    submission: submission,
  };
}
