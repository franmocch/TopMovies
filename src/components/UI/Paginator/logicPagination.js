export default function paginationLogic(
	lowFixed,
	dynamic,
	previousMax,
	MaxFixed,
	currentPage,
	totalPages
) {
	let pageToReturn;
	if (currentPage > 0 && currentPage < 4) {
		pageToReturn = lowFixed;
	}
	if (currentPage >= 4) {
		pageToReturn = currentPage + dynamic;

		if (currentPage === totalPages - 1) {
			pageToReturn = currentPage + previousMax;
		}
		if (currentPage === totalPages) {
			pageToReturn = currentPage + MaxFixed;
		}
	}
	if (currentPage === 4 && totalPages === 4) {
		pageToReturn = lowFixed;
	}

	return pageToReturn;
}
