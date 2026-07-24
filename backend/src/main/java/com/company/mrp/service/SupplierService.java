// Add Supplier
public Supplier addSupplier(Supplier supplier) {

    Supplier lastSupplier = supplierRepository.findTopByOrderByIdDesc();

    String newCode = "SUP001";

    if (lastSupplier != null &&
        lastSupplier.getSupplierCode() != null &&
        lastSupplier.getSupplierCode().startsWith("SUP")) {

        try {

            int number = Integer.parseInt(lastSupplier.getSupplierCode().substring(3));

            newCode = String.format("SUP%03d", number + 1);

        } catch (NumberFormatException e) {

            newCode = "SUP001";

        }
    }

    supplier.setSupplierCode(newCode);

    return supplierRepository.save(supplier);
}