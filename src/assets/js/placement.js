fetch('/assets/data/placement.json')
  .then((res) => {
    if (!res.ok) throw new Error('JSON not found');
    return res.json();
  })
  .then((data) => {
    console.log('Loaded placement data:', data);
    const { applied, selected, pending, upcoming } = data.summary;

    // Update summary counts
    document.getElementById("appliedCount").textContent = applied;
    document.getElementById("selectedCount").textContent = selected;
    document.getElementById("pendingCount").textContent = pending;
    document.getElementById("upcomingCount").textContent = upcoming;

    // Render table rows
    const tableBody = document.getElementById("placementTableBody");
    tableBody.innerHTML = data.drives
      .map(
        (d, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${d.company}</td>
          <td>${d.role}</td>
          <td>
            <span class="badge ${
              d.status === "Selected"
                ? "bg-success"
                : d.status === "Pending"
                ? "bg-warning text-dark"
                : d.status === "Upcoming"
                ? "bg-info"
                : "bg-secondary"
            }">${d.status}</span>
          </td>
          <td>${d.date}</td>
        </tr>`
      )
      .join("");
})
  .catch((err) => console.error('Error loading placement data:', err));
