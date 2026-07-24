public Supplier updateSupplier(Long id, Supplier supplier) {

    Supplier existingSupplier = supplierRepository.findById(id).orElse(null);

    if (existingSupplier != null) {

        // Keep Supplier Code unchanged
        existingSupplier.setSupplierName(supplier.getSupplierName());
        existingSupplier.setContactPerson(supplier.getContactPerson());
        existingSupplier.setPhone(supplier.getPhone());
        existingSupplier.setEmail(supplier.getEmail());
        existingSupplier.setAddress(supplier.getAddress());

        return supplierRepository.save(existingSupplier);
    }

    return null;
}